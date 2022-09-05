import * as customfunctions from "./modules/functions.js";

customfunctions.test();

import Swiper, { Navigation, Pagination } from 'swiper';

import IMask from "imask";
// import { create } from "browser-sync";

// swiper

const swiper = new Swiper('.product__swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: 'true',

});

// select

const selects = document.querySelectorAll('.select')

selects.forEach((item) => {
  item.addEventListener('click', (event)=> {

    if (!item.classList.toggle('is-open') ) {
      selectClose(item, event.target)
      
    } else {
      selectOpen(item)
    }
  })
})

function selectClose(select, selected = null) {
  if (selected && selected.closest('.select__item')) {
    const items = select.querySelectorAll('.select__item')

    items.forEach(item => {
      item.classList.remove('selected')
    })
  
    const currentText = select.querySelector('.select__current').childNodes[0]
    currentText.textContent = selected.textContent;
    selected.classList.add('selected')
  }

  const selectList = select.querySelector('.select__list')
  selectList.style ='height: 0px'
}

function selectOpen(select) {
  const items = [...select.querySelectorAll('.select__item')]
  const height = items.reduce((prev, cur) => {
    return prev + cur.clientHeight
  }, 0)

  select.querySelector('.select__list').style = `height: ${height}px`
}

// dropdown

const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(item => {
  item.addEventListener('mouseover', (event) => {
    item.classList.add('is-hover')
  })

  item.addEventListener('mouseout', (event) => {
    item.classList.remove('is-hover')
  })
})


// form validate

const form = document.querySelector('.modal__form')


form.onchange = function() {
  const submit = form.querySelector('button[type="submit"]')
  submit.disabled = false

  const inputName = form.querySelector('input[type="text"]')

  if (inputName.value.trim()) {
    inputName.parentElement.classList.add('correct')
  } else {
    submit.disabled = true
    inputName.parentElement.classList.remove('correct')
  }

  const inputTel = form.querySelector('input[type="tel"]')

  if (inputTel.value.length == 17 ) {
    inputTel.parentElement.classList.add('correct')
  } else {
    submit.disabled = true
    inputTel.parentElement.classList.remove('correct')
  }

  if (!form.querySelector('.form__agree input[type="checkbox"]').checked) {
    submit.disabled = true
  }

}

form.onsubmit = function(event) {
  event.preventDefault()

  const loader = document.createElement('div')
  loader.classList.add('spinner')
  loader.classList.add('modal__spinner')

  modalClose('#modalOrder')
  modalOpen('#success')

  const modalSuccess = document.querySelector('#success')
  const modalInner = modalSuccess.querySelector('.modal__inner')
  
  modalInner.classList.add('d-none')

  const btn = modalSuccess.querySelector('.btn')
  btn.disabled = true

  modalSuccess.querySelector('.modal__title').insertAdjacentElement('afterend',loader)

  setTimeout(() => {
    loader.remove()
    modalInner.classList.remove('d-none')
    btn.disabled = false

  }, 3000);
}

// phone mask

const element = document.querySelector('.modal__form input[type="tel"]');
const maskOptions = {
  mask: '{8}-(000)-000-00-00'
};
const mask = IMask(element, maskOptions);


// modal 


function modalOpen(id) {
  const modal = document.querySelector(id)
  modal.classList.add('active')
}

function modalClose(id) {
  const modal = document.querySelector(id)
  modal.classList.remove('active')
}


// burger

const burger = document.querySelector('.burger')

burger.addEventListener('click', event => {
  burger.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
  
})

document.addEventListener('click', event => {

  if (event.target.closest('[data-modal-open]')) {
    modalOpen(event.target.closest('[data-modal-open]').dataset.modalOpen)
  }
  if (event.target.hasAttribute('data-modal-close')) {
    modalClose('#' + event.target.closest('.modal').id)
  }
  selects.forEach(item => {
    if (!event.target.closest('.select')) {
      item.classList.remove('is-open')
      selectClose(item)
    }
    
  })
})