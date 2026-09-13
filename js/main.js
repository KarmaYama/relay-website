function handleMobileNav() {
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  // Pages other than the homepage (legal, download, and the policy pages) use a
  // simple "Back to Home" nav with no hamburger, so these elements won't exist.
  // Without this guard the listener below throws on every one of those pages.
  if (!mobileToggle || !navigation) return;

  mobileToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
    mobileToggle.classList.toggle("active");
  });

  document.documentElement.addEventListener("click", (event) => {
    if (!mobileToggle.contains(event.target) && !navigation.contains(event.target)) {
      navigation.classList.remove("open");
      mobileToggle.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleMobileNav();
});
