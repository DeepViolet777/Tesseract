
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger-icon');
const mobMenu =  document.querySelector('.mob-menu');

burger.onclick = function () {
  burgerIcon.classList.toggle('burger-icon-active');
  mobMenu.classList.toggle('active');
  //document.querySelector('.motto').classList.toggle('hidden');
  document.querySelector('.buy-btn').classList.toggle('hidden');
}
