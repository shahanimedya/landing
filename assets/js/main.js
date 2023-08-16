const bannerSlider = document.querySelector("#banner-slider");
const bannerSliderObserver = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove("banner-slides__pause");
  } else {
    entry.target.classList.add("banner-slides__pause");
  }
}, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
});
bannerSliderObserver.observe(bannerSlider);
