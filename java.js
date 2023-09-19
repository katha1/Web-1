document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -100,
      shift: 3,
      padding: 3,
      numVisible: 3,
      indicators: true,
      noWrap: false
    });
  });

  