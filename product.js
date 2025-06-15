// Auto-slider for each product card
document.querySelectorAll('.product_card').forEach(card => {
    const slides = card.querySelectorAll('.slider_img');
    let current = 0;

    setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    }, 4000); // 4 seconds
});