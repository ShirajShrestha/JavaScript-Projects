'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const modalOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const modalClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModalBtn.length; i++)
  openModalBtn[i].addEventListener('click', modalOpen);

closeModalBtn.addEventListener('click', modalClose);
overlay.addEventListener('click', modalClose);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
