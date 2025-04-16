const heightListener = document.querySelectorAll(
  '.section-card__info_height-listener'
);
heightListener.forEach((element) => {
  const moreText = element.querySelector('.more-text');
  if (moreText) {
    let textInner = moreText.querySelector('.more-text__inner');
    const showMoreBtn = moreText.querySelector('.more-text__toggle-btn');
    const textWrapper = moreText.querySelector('.more-text__wrapper');
    //console.log(textWrapper.offsetHeight);
    if (textWrapper && textWrapper.offsetHeight <= textInner.offsetHeight) {
      showMoreBtn.classList.add('more-text__toggle-btn_hidden');
      textInner.classList.add('more-text_disallow');
    }

    showMoreBtn.addEventListener('click', () => {
      textInner.classList.toggle('short-height');
      moreText
        .querySelector('.more-text__btn-text_open')
        .classList.toggle('active');
      moreText
        .querySelector('.more-text__btn-text_closed')
        .classList.toggle('active');
    });
  }
});
