const slides = document.querySelectorAll('.slideshow-container > img');
let currentSlide = 1;

const showNextSlide = () => {
  // 현재 슬라이드 감추기
  slides[currentSlide].style.opacity = '0';

  // 다음 슬라이드 보이기
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = '1';

  // 2초마다 슬라이드 전환
  setTimeout(showNextSlide, 2000);
};

// 초기 슬라이드 표시
slides[currentSlide].style.opacity = '1';

const runSlide = () => {
  setTimeout(showNextSlide, 2000);
}

export {
  runSlide,
}
