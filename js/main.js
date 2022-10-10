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
        body.classList.add('open-modal');
        overlay.classList.add('modal--active');
        modalName.classList.add(activeClass);
    });
}

openModal( modal, login, loginBtn, 'login--active');
openModal( modal, cart, cartBtn, 'cart--active');
openModal( modal, reg, regBtn, 'reg--active');

function closeModal(overlay, modalName, closeBtn, activeClass) {
    closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            body.classList.remove('open-modal');
            overlay.classList.remove('modal--active');
            modalName.classList.remove(activeClass);
        });
        modal.addEventListener('click', function (e) {
            if(e.target === this) {
                body.classList.remove('open-modal');
                modal.classList.remove('modal--active');
                modalName.classList.remove(activeClass);
            }
        })
    });
}

closeModal( modal, login, modalClose, 'login--active' );
closeModal( modal, cart, modalClose, 'cart--active' );
closeModal( modal, reg, modalClose, 'reg--active' );