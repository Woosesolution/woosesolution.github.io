document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider, i) => {
    const mask       = slider.querySelector(".slider-mask");
    const slides     = Array.from(mask.querySelectorAll(".slide"));
    const leftArrow  = slider.querySelector(".slider-arrow-left");
    const rightArrow = slider.querySelector(".slider-arrow-right");
    const navDots    = slider.parentElement.querySelectorAll(".slider-nav .nav-dot");

    let current = 0;
    const total = slides.length;

    function goTo(idx) {
      current = (idx + total) % total; // safe wrap

      mask.style.transform = `translateX(-${current * 100}%)`;

      navDots.forEach(dot =>
        dot.classList.toggle("active", Number(dot.dataset.index) - 1 === current)
      );
    }

    // arrow navigation
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => goTo(current - 1));
      rightArrow.addEventListener("click", () => goTo(current + 1));
    }

    // nav dot clicks
    navDots.forEach(dot =>
      dot.addEventListener("click", () => {
        const idx = Number(dot.dataset.index) - 1;
        goTo(idx);
      })
    );

    goTo(0);

    // autoplay (optional)
    const delay = Number(slider.dataset.delay || 0);
    if (delay > 0) {
      setInterval(() => goTo(current + 1), delay);
    }
  });
});
