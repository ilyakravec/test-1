/* dropdown ini */
const dropdownWrapperList = document.querySelectorAll('.dropdown-wrapper');

dropdownWrapperList.forEach((dropdownWrapper) => {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown-btn');
  const dropdownContainer = dropdownWrapper.querySelector(
    '.dropdown-container'
  );

  dropdownBtn.addEventListener('click', () => {
    dropdownContainer.classList.toggle('active');
    dropdownBtn.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (dropdownContainer.classList.contains('active')) {
      if (
        !dropdownContainer.contains(e.target) &&
        !dropdownContainer.parentElement.contains(e.target) &&
        e.target !== dropdownBtn
      ) {
        dropdownContainer.classList.remove('active');
        dropdownBtn.classList.remove('active');
      }
    }
  });
});
/* dropdown ini */
/* accordeon */
/* const accorderonItems = document.querySelector('.accordion');
if (accorderonItems) {
  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false,
  });
} */
const accorderonItems = document.querySelectorAll('.accordion');
if (accorderonItems) {
  accorderonItems.forEach((item) => {
    new ItcAccordion(item, {
      alwaysOpen: false,
    });
  });
}

const fastLinksAccordionItems = document.querySelectorAll(
  '.accordion-fastlinks'
);
if (fastLinksAccordionItems && document.documentElement.clientWidth > 568) {
  fastLinksAccordionItems.forEach((item) => {
    new ItcAccordionFastLinks(item, {
      alwaysOpen: true,
    });
  });
}

const filterAccordionItems = document.querySelectorAll('.accordion-filter');
if (filterAccordionItems && document.documentElement.clientWidth < 568) {
  filterAccordionItems.forEach((item) => {
    new ItcAccordionFastLinks(item, {
      alwaysOpen: true,
    });
  });
}
/* accordeon */

$('[data-fancybox="gallery"]').fancybox();
