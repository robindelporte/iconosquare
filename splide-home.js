import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splideMain = new splidejsSplide(".splide.is-temoignage", {
  type: "slide",
  perPage: 1,
  autoWidth: false,
  pagination: false,
  arrows: false,
  rewind: false,
  gap: "20px",
  speed: 400,
  focus: 0,
  trimSpace: false
});

const splidePagination = new splidejsSplide(".splide.is-pagination", {
  autoWidth: true,
  perPage: "auto",
  updateOnMove: true,
  isNavigation: true,
  gap: 0,
  focus: "center",
  rewind: false,
  pagination: false,
  speed: 300,
  arrows: {
    prev: '.splide__arrow--prev',
    next: '.splide__arrow--next'
  }
});

splideMain.sync(splidePagination);
splideMain.mount();
splidePagination.mount();

document.addEventListener('DOMContentLoaded', () => {
  const paginationList = document.querySelector('.splide__list.is-pagination');
  if (paginationList) {
    paginationList.style.transform = 'none';
  }
  
  applyPaginationStyles();
});

function applyPaginationStyles() {
  requestAnimationFrame(() => {
    const paginationSlides = document.querySelectorAll('.splide__slide.is-pagination');
    
    paginationSlides.forEach(slide => {
      slide.style.marginRight = '0';
      slide.style.marginLeft = '0';
      
      if (slide.classList.contains('is-active')) {
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
          boxSizing: "border-box"
        });
        
        const textEl = slide.querySelector('.pagination-text');
        if (textEl) {
          textEl.style.opacity = '1';
          textEl.style.visibility = 'visible';
          textEl.style.lineHeight = '1';
          textEl.style.color = 'white';
        }
      } else {
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
        
        const textEl = slide.querySelector('.pagination-text');
        if (textEl) {
          textEl.style.opacity = '0';
          textEl.style.visibility = 'hidden';
        }
      }
    });
    
    const paginationList = document.querySelector('.splide__list.is-pagination');
    if (paginationList) {
      paginationList.style.transform = 'none';
    }
  });
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && 
        (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
      applyPaginationStyles();
    }
  });
});

splidePagination.on('mounted', function() {
  const paginationList = document.querySelector('.splide__list.is-pagination');
  if (paginationList) {
    observer.observe(paginationList, { attributes: true, subtree: true });
  }
  
  setTimeout(applyPaginationStyles, 50);
  
  const prevButton = document.querySelector('.splide__arrow--prev');
  const nextButton = document.querySelector('.splide__arrow--next');
  
  if (prevButton) {
    prevButton.classList.add('nav-arrow', 'nav-prev');
  }
  
  if (nextButton) {
    nextButton.classList.add('nav-arrow', 'nav-next');
  }
});

splidePagination.on('active', applyPaginationStyles);
splidePagination.on('inactive', applyPaginationStyles);
splidePagination.on('move', applyPaginationStyles);
