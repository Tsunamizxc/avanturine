let scrollPosition = 0;
console.log(window.pageYOffset);
export function disable_scroll() {
  scrollPosition = window.pageYOffset;
  document.body.style.top = `${scrollPosition}px`;
  document.body.classList.add('dis-scroll');
}

export function enable_scroll() {
  document.body.classList.remove('dis-scroll');
  window.scrollTo(0, scrollPosition);
  document.body.style.top = '0';
}
