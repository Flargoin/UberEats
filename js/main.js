"use strict";

/* Modal */
/* Получаем все нужные элементы со страницы */
const modal         = document.querySelector('.modal'),             /* Задний тёмный фон */
      body          = document.querySelector('body'),               /* Документ */
      modalClose    = document.querySelectorAll('.modal__close'),   /* Кнопка закрытия модального окна */
      loginBtn      = document.querySelector('.header__btn-in'),    /* Кнопка открытия окна логина */
      cartBtn       = document.querySelector('.header__btn-cart'),  /* Кнопка открытия окна корзины */
      regBtn        = document.querySelector('.login-form__registration-link'), /* ссылка на окно регистрации */
      cart          = document.querySelector('.cart'),              /* окно корзины */
      login         = document.querySelector('.login'),             /* окно логина */
      reg           = document.querySelector('.reg');               /* окно регистрации */

/* Функция открытия модального окна */    
function openModal(overlay, modalName, modalBtn, activeClass) {
    modalBtn.addEventListener('click', (e) => {
        overlay.classList.add('modal--active');
        modalName.classList.add(activeClass);
        body.classList.add('open-modal');
    });
}

openModal( modal, login, loginBtn, 'login--active');
openModal( modal, cart, cartBtn, 'cart--active');
openModal( modal, reg, regBtn, 'reg--active');

/* Функция закрытия модального окна */
function closeModal(overlay, modalName, closeBtn, activeClass) {
    closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            overlay.classList.remove('modal--active');
            modalName.classList.remove(activeClass);
            body.classList.remove('open-modal');
        });
        modal.addEventListener('click', function (e) {
            if(e.target === this) {
                modal.classList.remove('modal--active');
                modalName.classList.remove(activeClass);
                body.classList.remove('open-modal');
            }
        })
    });
}

closeModal( modal, login, modalClose, 'login--active' );
closeModal( modal, cart, modalClose, 'cart--active' );
closeModal( modal, reg, modalClose, 'reg--active' );



/* Lang custom select */

const customSelect = document.querySelector('.custom-select');  /* Элемент выбора языка */

/* Обработчик события клика, при нажатии открывается меню выбора */
customSelect.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('custom-select--open');

    if(e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        e.currentTarget.querySelector('.custom-select__top').textContent = text;
    }
})



/* Scroll to top */

/* const pageUp = document.querySelector('.pageup'),
      topPoint = document.querySelector('#top');

pageUp.addEventListener('click', () => {
    window.scrollTo({
        top: topPoint.offsetTop,
        behavior: 'smooth'
    });
}); */


/* count in cart */

const countInput    = document.querySelectorAll('.count__input'),   /* кол-во 1 позиции продукта */
      countMinus    = document.querySelector('.count-minus'),    /* кнопка убавления в кол-ве продуктов */
      countPlus     = document.querySelector('.count-plus');     /* кнопка прибавления в кол-ве продуктов */


/* получения всех полей с кол-вом продуктов */
countInput.forEach(el => {
    /* проверка на макс. и мин. допустимое кол-во заказываоемого продукта */
    el.addEventListener('keyup', (e) => {
        console.log(e.currentTarget.value);
    
        if(e.currentTarget.value <= 1) {
            countMinus.classList.add('count__btn--disabled');
            countPlus.classList.remove('count__btn--disabled');
        } else {
            countMinus.classList.remove('count__btn--disabled');
        }
    
        if(e.currentTarget.value > 99998) {
            countMinus.classList.remove('count__btn--disabled');
            countPlus.classList.add('count__btn--disabled');
        } else {
            countPlus.classList.remove('count__btn--disabled');
        }
    });
})

/* Работа кнопки прибавления в кол-ве продуктов */
countPlus.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let currentValue = parseInt(countInput.value);
        console.log(currentValue);
        currentValue++;
        countInput.value = currentValue;
    });
})

/* Работа кнопки убавления в кол-ве продуктов */
countPlus.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let currentValue = parseInt(countInput.value);
        console.log(currentValue);
        currentValue++;
        countInput.value = currentValue;
    });
})
