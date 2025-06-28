import { disable_scroll, enable_scroll } from '../functions/scroll';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  // Функция закрытия меню
  const closeMenu = () => {
    burger?.classList.remove('burger--active');
    menu?.classList.remove('menu--active');
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    enable_scroll();
  };

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disable_scroll();
    } else {
      closeMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);

  menuItems?.forEach(el => {
    el.addEventListener('click', (e) => {
      // Закрываем меню
      closeMenu();

      // Получаем целевой якорь из href
      const targetId = el.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      // Ждем завершения анимации закрытия меню
      setTimeout(() => {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offset = headerHeight + 0; // Дополнительный отступ

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 300); // Время должно соответствовать длительности анимации закрытия меню
    });
  });
})();
