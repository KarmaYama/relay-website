// Moved out of download.html so the site's content policy can forbid
// inline scripts outright, which is the single most effective line of
// defence against injected script on a static site.
document.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("copySha");
      const val = document.getElementById("shaValue");
      const msg = document.getElementById("copyMsg");

      if (btn && val) {
        btn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(val.textContent.trim());
            if (msg) { 
                msg.textContent = "Copied.";
                msg.style.display = "block"; 
                setTimeout(() => msg.style.display = "none", 2000); 
            }
          } catch (_) {
            const r = document.createRange();
            r.selectNodeContents(val);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(r);
            if (msg) {
                msg.textContent = "Selected — press Ctrl+C";
                msg.style.display = "block";
                setTimeout(() => msg.style.display = "none", 3000);
            }
          }
        });
      }
    });

// The certificate fingerprint gets the same copy affordance as the file
// checksum. Reading sixty-four characters off a phone screen and typing them
// somewhere is not something anyone will actually do.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("copyCert");
  const val = document.getElementById("certValue");
  const msg = document.getElementById("copyCertMsg");
  if (!btn || !val) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(val.textContent.trim());
      if (msg) {
        msg.textContent = "Copied.";
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 2000);
      }
    } catch (_) {
      if (msg) {
        msg.textContent = "Select the text above to copy it.";
        msg.style.display = "block";
      }
    }
  });
});
