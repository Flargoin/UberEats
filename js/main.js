"use strict";

/* Modal */
const modal         = document.querySelector('.modal'),
      body          = document.querySelector('body'),
      modalClose    = document.querySelectorAll('.modal__close'),
      loginBtn      = document.querySelector('.header__btn-in'),
      cartBtn       = document.querySelector('.header__btn-cart'),
      regBtn        = document.querySelector('.login-form__registration-link'),
      cart          = document.querySelector('.cart'),
      login         = document.querySelector('.login'),
      reg           = document.querySelector('.reg');

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

const customSelect = document.querySelector('.custom-select');

customSelect.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('custom-select--open');

    if(e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        e.currentTarget.querySelector('.custom-select__top').textContent = text;
    }
})