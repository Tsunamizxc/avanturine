let scrollPosition = 0;
let isScrollDisabled = false;

export function disable_scroll() {
  if (isScrollDisabled) return;
  
  // Сохраняем текущую позицию скролла
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Блокируем скролл
  document.querySelector(".site-container").classList.add("dis-scroll");
  document.querySelector(".site-container").style.top = `-${scrollPosition}px`;
  
  isScrollDisabled = true;
}

export function enable_scroll() {
  if (!isScrollDisabled) return;
  
  // Разблокируем скролл
  const container = document.querySelector(".site-container");
  container.classList.remove("dis-scroll");
  container.style.top = '';
  
  // Возвращаем позицию скролла
  requestAnimationFrame(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'auto'
    });
  });
  
  isScrollDisabled = false;
}