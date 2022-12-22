'use strict'

document.addEventListener('DOMContentLoaded', ()=>{
  const swiper = document.querySelector('.software'),
        softwareBtn = document.querySelector('.software__button'),
        svg = document.querySelector('#svg'),
        softwareList = document.querySelector('.software__list');
  let slider = null;

  const initSlider = () => {
    if(window.innerWidth <= 565 && swiper.dataset.mobile === 'false'){
      slider = new Swiper(swiper, {
        loop: true,
        width:256,
        pagination: {
          el: '.software__pag',
          bulletClass: 'software-pag__bullet',
          bulletActiveClass: 'software-pag__bullet--active'
          },
      })
      return swiper.dataset.mobile = 'true'
    }
    if(window.innerWidth > 530 && slider !== null){
      slider.destroy()
      swiper.dataset.mobile = 'false';
    }
  }
  const showAll = (parent) => {
    if(parent.clientHeight === 160) {
      svg.style.transform = 'rotate(0.5turn)';
      softwareBtn.childNodes[2].textContent = 'Скрыть'
      parent.style.maxHeight = 'fit-content';
      return
    }
    svg.style.transform = 'rotate(1turn)';
    softwareBtn.childNodes[2].textContent = 'Показать все'
    parent.style.maxHeight = '160px';
    return
  }
  console.dir(softwareList);
  softwareBtn.addEventListener('click', ()=>showAll(softwareList))
  initSlider();
  window.addEventListener('resize', initSlider);
  console.log(slider);
})