'use strict';

// choose type
const types = document.querySelector('.types');

types.addEventListener('click', e => {
  const target = e.target;
  if (target.tagName === 'UL') return;

  const type = target.tagName === 'LI' ? target : target.closest('li');
  const checked = document.querySelector('.types > li.checked');

  checked.classList.remove('checked');
  type.classList.add('checked');
});
