import splidejsSplide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const splideMain = new splidejsSplide(".section_slider .splide:not(.is-pagination)", {
  type: "slide",
  perPage: "auto",
  autoWidth: true,
  pagination: false,
  arrows: false,
  rewind: false,
  gap: "40px", // Gap de 40px sur desktop
  speed: 400,
  focus: 0,
  trimSpace: false,
  breakpoints: {
    768: {
      gap: "20px" // Gap de 20px sur mobile
    }
  }
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

let maxSlideIndex = 0;

function calculateMaxIndex() {
  const windowWidth = window.innerWidth;
  const totalSlides = splideMain.Components.Slides.getLength();
  
  if (windowWidth >= 1440) {
    return totalSlides - 2;
  } else {
    return totalSlides - 1;
  }
}

splideMain.on('mounted', function() {
  maxSlideIndex = calculateMaxIndex();
  
  const originalGo = splideMain.go;
  splideMain.go = function(index) {
    maxSlideIndex = calculateMaxIndex();
    
    if (index > maxSlideIndex) {
      index = maxSlideIndex;
    }
    originalGo.call(this, index);
  };
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
