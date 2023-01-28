document.addEventListener('DOMContentLoaded', () => {
  const awards = document.querySelectorAll('.table__awards');

  awards.forEach((item) => {
    const awardsList = item.querySelectorAll('.table__award');
    const length = awardsList.length;

    awardsList.forEach((award, i) => {
      award.style.position = 'absolute';
      award.style.right = `${(length - (i + 1)) * 28 + 'px'}`;
    });
  });
});

const leftValue = document.querySelector('.slider__value--left');
const rightValue = document.querySelector('.slider__value--right');
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => {
    e.style.setProperty('--value', e.value);
    leftValue.textContent = e.value + '%';
    rightValue.textContent = (100 - e.value).toFixed(1) + '%';
  });
}
