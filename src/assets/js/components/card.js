const container = document.querySelectorAll('.card');
if (container.length !== 0) {
  const activeEl = document.querySelector('.card__wrapper.show');
  const width = activeEl.childNodes[1].offsetWidth;
  activeEl.style['width'] = `${width}px`;

  container.forEach(function (cardWrapper) {
    const cardItem = cardWrapper.querySelectorAll('.card__item');
    addEventListener('click', (e) => {
      const elHeader = e.target.closest('.card__item');
      if (elHeader) {
        const elOpenItem = cardWrapper.querySelector('.show');
        if (elHeader.parentElement !== elOpenItem) {
          elOpenItem.classList.remove('show');
          elOpenItem.style['width'] = null;
          elHeader.parentElement.classList.add('show');
          const activeItem = elHeader.parentElement;
          const width = activeItem.childNodes[1].offsetWidth;
          activeItem.style['width'] = `${width}px`;
        }
      }
    });
  });
}
