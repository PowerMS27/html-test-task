(function sliderFunc() {
  // Объявление слайдера для фото товаров
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    effect: "fade",
    preventClicks: false,
    updateOnImagesReady: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let products = document.querySelectorAll(".product");
  let paginationButtons = document.querySelectorAll(
    ".swiper-pagination-bullet"
  );

  // Переключение слайдов за счёт движения курсора
  paginationButtons.forEach((element) =>
    element.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      event.target.click();
    })
  );

  // Возвращение на 1-й слайд, когда курсор не на карточке товара
  products.forEach((element) => {
    element.addEventListener("mouseleave", () => {
      paginationButtons.forEach((pagButton) => {
        if (pagButton.getAttribute("aria-label") == "Go to slide 1") {
          pagButton.click();
        }
      });
    });
    // Кликабельность ссылки товара
    element.addEventListener("mouseup", (event) => {
      if (event.which == 1) {
        window.location = element.href;
      }
    });
  });
})();
