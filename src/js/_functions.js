// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from "./functions/check_client_width";

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Подключение свайпера
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperG = new Swiper('.mySwiperGallery', {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiperR = new Swiper('.mySwiperReviews', {
//    loop: true,
    // centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
                loop: false,
             centeredSlides: false,
        },
    }
});
// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');

// функция блокировки и разблокировки скролла
import { disable_scroll, enable_scroll } from "./functions/scroll";
disable_scroll();
enable_scroll();

// добавление маски на телефон
// import phone_mask from "./functions/phone_mask";
// phone_mask();

// функция для добавления ограничения символов
// import character_restriction from "./functions/character_restriction";
// добавлять атрибуты на поля
// data-ru-field - русские символы
// data-num-field - цифры
// data-eng-field - английские символы
// data-email-field - ограничение символов для почты
// data-allowed-field - создано для каких-то резиновых ограничений, можно менять

window.addEventListener('scroll', function() {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY || window.pageYOffset;
    let height = window.innerWidth <= 1024 ? 10 : 20;
    if (scrollPosition > height) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


// window.addEventListener('scroll', function() {
//     const headerM = document.querySelector(".burger-menu");
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     let height = window.innerWidth <= 1024 ? 10 : 120;
//     if (scrollPosition > height) {
//         headerM.classList.add('active');
//     } else {
//         headerM.classList.remove('active');
//     }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 60; 
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});