// relay-website/js/invite.js
//
// Showing somebody the job they were sent, before asking them to install anything.
//
// This page is where a job link lands when Relay is not installed. The first
// version of it showed the code and a sales pitch, which is exactly backwards:
// the code is the least interesting thing on the page and only matters if the
// link fails. What somebody wants to know, standing there having been sent a
// link by a runner, is what the job actually is and who is offering it.
//
// So it asks Relay. The proposal is readable without an account on purpose —
// that is the whole reason it was built that way — and it carries the runner's
// name, whether Relay checked their identity, what they have done, the errand,
// and what it costs. Nothing on it can be used to reach the runner outside
// Relay, which is what makes it safe to show to whoever holds the link.
//
// Everything degrades. No code in the address, a code that has expired, Relay
// unreachable, JavaScript off entirely — each of those leaves the page saying
// something true and useful rather than empty or broken. The markup ships with
// the fallback already visible; this only ever adds.

(function () {
  'use strict';

  var API = 'https://api.relay.africa/api/v1';

  /// Characters a Relay code is drawn from. No O, 0, I, 1, 5 or S.
  var ALPHABET = /^[ABCDEFGHJKLMNPQRTUVWXYZ2346789]{4,12}$/;

  function codeFromAddress() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length < 2 || parts[0] !== 'j') return null;

    var code = decodeURIComponent(parts[1]).trim().toUpperCase();
    // Checked against the alphabet rather than trusted. This comes from the
    // address bar, and anything from there is somebody else's input until it
    // has been looked at.
    return ALPHABET.test(code) ? code : null;
  }

  function show(id) {
    var el = document.getElementById(id);
    if (el) el.hidden = false;
  }

  function hide(id) {
    var el = document.getElementById(id);
    if (el) el.hidden = true;
  }

  /// Writes text into an element. Never innerHTML — all of this is either from
  /// an address bar or from a person who typed it into a phone.
  function write(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function money(amount, currency) {
    var figure = Number(amount);
    if (!isFinite(figure)) return '';
    return currency + ' ' + figure.toFixed(2);
  }

  /// Their record in one line, or nothing.
  ///
  /// Nothing when they have finished no jobs. Everybody is new once, and
  /// "0 jobs" on the card somebody is using to decide whether to trust a
  /// stranger reads worse than not raising it.
  function record(proposal) {
    var jobs = proposal.runner_jobs_completed || 0;
    if (jobs === 0) return null;

    var line = jobs === 1 ? '1 job done' : jobs + ' jobs done';
    if (typeof proposal.runner_rating === 'number') {
      line += '  ·  ' + proposal.runner_rating.toFixed(1) + ' out of 5';
    }
    return line;
  }

  function render(proposal) {
    write('runnerName', proposal.runner_name);

    if (proposal.runner_is_verified) show('runnerVerified');

    var theirRecord = record(proposal);
    if (theirRecord) {
      write('runnerRecord', theirRecord);
      show('runnerRecord');
    }

    write('jobDescription', proposal.description);
    write('jobFrom', proposal.pickup_address);
    write('jobTo', proposal.destination_address);
    write('jobAmount', money(proposal.proposed_amount, proposal.currency));

    hide('inviteFallback');
    show('inviteJob');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var code = codeFromAddress();

    if (!code) {
      write('inviteCode', 'Ask your runner to send the link again');
      var el = document.getElementById('inviteCode');
      if (el) {
        el.style.letterSpacing = '0';
        el.style.fontSize = '17px';
      }
      return;
    }

    write('inviteCode', code);

    // The job itself. A failure here is not worth reporting loudly — the page
    // already says enough to be useful, and somebody who has just been sent a
    // link does not need to be told about a network error.
    fetch(API + '/jobs/invitations/' + encodeURIComponent(code), {
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('not available');
        return response.json();
      })
      .then(render)
      .catch(function () {
        // Left as it was: the code, the download, and why it is worth it.
      });
  });
})();
