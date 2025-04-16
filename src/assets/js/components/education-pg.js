const mobContainer = document.querySelector('.intro__mob-inner');
const desktopContainer = document.querySelector('.intro__inner');

if (mobContainer) {
	const field = mobContainer.querySelector('.intro-mob__field');
	const fieldTabs = mobContainer.querySelector('.intro-mob__field-tabs');
	const fieldTab = mobContainer.querySelectorAll('.intro-mob__field-tab');
	const fieldTitle = field?.querySelector('span');
	const panes = mobContainer.querySelectorAll('.tabs__pane');

	fieldTab.forEach((tab, index) => {
		tab.addEventListener('click', (e) => {
			e.stopPropagation();

			fieldTab.forEach(t => t.classList.remove('intro-mob__field-tab--active', 'tabs__btn_active'));
			panes.forEach(p => p.classList.remove('tabs__pane_show'));

			tab.classList.add('intro-mob__field-tab--active', 'tabs__btn_active');
			if (fieldTitle) fieldTitle.textContent = tab.textContent.trim();
			if (panes[index]) panes[index].classList.add('tabs__pane_show');

			fieldTabs.classList.remove('active');
			field.classList.remove('intro-mob__field--active');
		});
	});

	field?.addEventListener('click', (e) => {
		e.stopPropagation();
		fieldTabs.classList.add('active');
		field.classList.add('intro-mob__field--active');
	});

	document.addEventListener('click', (e) => {
		if (!field?.contains(e.target)) {
			fieldTabs.classList.remove('active');
			field.classList.remove('intro-mob__field--active');
		}
	});
}

if (desktopContainer) {
	const tabs = desktopContainer.querySelectorAll('.intro__tab');
	const panes = desktopContainer.querySelectorAll('.tabs__pane');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(t => t.classList.remove('active'));
			panes.forEach(p => p.classList.remove('tabs__pane_show'));

			tab.classList.add('active');
			if (panes[index]) panes[index].classList.add('tabs__pane_show');
		});
	});
}
