// relay-website/js/invite.js
//
// Showing somebody the code from the link they followed.
//
// The address is /j/QK7T9M, rewritten to this page by the host so the code is
// still in the bar. Read from there rather than asked for, because somebody who
// arrives here has already been handed it once and asking again is the friction
// the link exists to remove.
//
// Written into the page rather than baked in at build time: every one of these
// links is a different code, and a static page per invitation is not a thing
// that can exist.

(function () {
  'use strict';

  /// Characters a Relay code is drawn from. No O, 0, I, 1, 5 or S.
  var ALPHABET = /^[ABCDEFGHJKLMNPQRTUVWXYZ2346789]{4,12}$/;

  function codeFromAddress() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length < 2 || parts[0] !== 'j') return null;

    var code = decodeURIComponent(parts[1]).trim().toUpperCase();
    // Checked against the alphabet rather than printed as given. This value
    // comes from the address bar, and anything from there is somebody else's
    // input until it has been looked at.
    return ALPHABET.test(code) ? code : null;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var target = document.getElementById('inviteCode');
    if (!target) return;

    var code = codeFromAddress();
    if (code) {
      // textContent, never innerHTML. Nothing from an address bar is markup.
      target.textContent = code;
      return;
    }

    // No readable code in the address. Say so plainly rather than showing a
    // row of dashes that looks like something still loading.
    target.textContent = '—';
    target.style.letterSpacing = '0';
    target.style.fontSize = '18px';
    target.textContent = 'Ask your runner to send the link again';
  });
})();
