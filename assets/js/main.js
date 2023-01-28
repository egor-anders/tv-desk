document.addEventListener('DOMContentLoaded', () => {
  const awards = document.querySelectorAll('.table__awards');

  awards.forEach(item => {
    const awardsList = item.querySelectorAll('.table__award');
    const length = awardsList.length;

    awardsList.forEach((award, i) => {
      award.style.position = 'absolute';
      award.style.right = `${(length - (i + 1)) * 28 + 'px'}`;
    });
  });
});