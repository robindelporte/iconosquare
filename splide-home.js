<script type="module">
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

document.addEventListener('DOMContentLoaded', function() {
  
  // Slider principal témoignages
  const swiperMain = new Swiper('.swiper.is-temoignage', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    speed: 400,
    allowTouchMove: true,
    
    // Pas de navigation ni pagination sur le slider principal
    navigation: false,
    pagination: false
  });
  
  // Slider pagination custom
  const swiperPagination = new Swiper('.swiper.is-pagination', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    loop: false,
    speed: 300,
    allowTouchMove: false,
    
    // Navigation sur le slider pagination
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  // Synchronisation des deux sliders
  swiperMain.controller.control = swiperPagination;
  swiperPagination.controller.control = swiperMain;
  
  // Fonction pour appliquer les styles de pagination
  function applyPaginationStyles() {
    requestAnimationFrame(() => {
      const paginationSlides = document.querySelectorAll('.swiper-slide.is-pagination');
      
      paginationSlides.forEach((slide, index) => {
        const textEl = slide.querySelector('.pagination-text');
        
        if (index === swiperMain.activeIndex) {
          // Style pour l'élément actif
          Object.assign(slide.style, {
            padding: "0.75rem 1.125rem",
            backgroundColor: "#1D1D1B",
            borderRadius: "999px",
            width: "auto",
            minWidth: "max-content",
            height: "34px",
            minHeight: "34px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "0 10px"
          });
          
          if (textEl) {
            textEl.style.opacity = '1';
            textEl.style.visibility = 'visible';
            textEl.style.lineHeight = '1';
            textEl.style.color = 'white';
          }
        } else {
          // Style pour les éléments inactifs
          Object.assign(slide.style, {
            padding: "0",
            width: "8px",
            height: "8px",
            minWidth: "8px",
            maxWidth: "8px",
            minHeight: "8px",
            maxHeight: "8px",
            backgroundColor: "#AEB9C6",
            borderRadius: "50%",
            display: "flex",
            margin: "0 10px"
          });
          
          if (textEl) {
            textEl.style.opacity = '0';
            textEl.style.visibility = 'hidden';
          }
        }
      });
    });
  }
  
  // Gérer les clics sur les éléments de pagination
  document.querySelectorAll('.swiper-slide.is-pagination').forEach((slide, index) => {
    slide.addEventListener('click', () => {
      swiperMain.slideTo(index);
      swiperPagination.slideTo(index);
    });
  });
  
  // Événements pour maintenir la synchronisation et les styles
  swiperMain.on('slideChange', () => {
    swiperPagination.slideTo(swiperMain.activeIndex);
    applyPaginationStyles();
  });
  
  swiperPagination.on('slideChange', () => {
    swiperMain.slideTo(swiperPagination.activeIndex);
    applyPaginationStyles();
  });
  
  // Appliquer les styles initiaux
  swiperMain.on('init', () => {
    setTimeout(applyPaginationStyles, 50);
  });
  
  // Appliquer les styles après le montage
  setTimeout(applyPaginationStyles, 100);
  
});
</script>
