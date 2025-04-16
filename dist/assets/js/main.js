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
class ItcAccordion {
	constructor(target, config) {
		this._el =
			typeof target === 'string' ? document.querySelector(target) : target;
		const defaultConfig = {
			alwaysOpen: true,
			duration: 350,
		};
		this._config = Object.assign(defaultConfig, config);
		this.addEventListener();
	}
	addEventListener() {
		this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.accordion__header');
			if (!elHeader) {
				return;
			}
			if (!this._config.alwaysOpen) {
				const elOpenItem = this._el.querySelector('.accordion__item_show');
				if (elOpenItem) {
					elOpenItem !== elHeader.parentElement
						? this.toggle(elOpenItem)
						: null;
				}
			}
			this.toggle(elHeader.parentElement);
		});
	}
	show(el) {
		const elBody = el.querySelector('.accordion__body');
		if (
			elBody.classList.contains('collapsing') ||
			el.classList.contains('accordion__item_show')
		) {
			return;
		}
		elBody.style['display'] = 'block';
		const height = elBody.offsetHeight;
		elBody.style['height'] = 0;
		elBody.style['overflow'] = 'hidden';
		elBody.style['transition'] = `height ${this._config.duration}ms ease`;
		elBody.classList.add('collapsing');
		el.classList.add('accordion__item_slidedown');
		elBody.offsetHeight;
		elBody.style['height'] = `${height}px`;
		window.setTimeout(() => {
			elBody.classList.remove('collapsing');
			el.classList.remove('accordion__item_slidedown');
			elBody.classList.add('collapse');
			el.classList.add('accordion__item_show');
			elBody.style['display'] = '';
			elBody.style['height'] = '';
			elBody.style['transition'] = '';
			elBody.style['overflow'] = '';
		}, this._config.duration);
	}
	hide(el) {
		const elBody = el.querySelector('.accordion__body');
		if (
			elBody.classList.contains('collapsing') ||
			!el.classList.contains('accordion__item_show')
		) {
			return;
		}
		elBody.style['height'] = `${elBody.offsetHeight}px`;
		elBody.offsetHeight;
		elBody.style['display'] = 'block';
		elBody.style['height'] = 0;
		elBody.style['overflow'] = 'hidden';
		elBody.style['transition'] = `height ${this._config.duration}ms ease`;
		elBody.classList.remove('collapse');
		el.classList.remove('accordion__item_show');
		elBody.classList.add('collapsing');
		window.setTimeout(() => {
			elBody.classList.remove('collapsing');
			elBody.classList.add('collapse');
			elBody.style['display'] = '';
			elBody.style['height'] = '';
			elBody.style['transition'] = '';
			elBody.style['overflow'] = '';
		}, this._config.duration);
	}
	toggle(el) {
		el.classList.contains('accordion__item_show')
			? this.hide(el)
			: this.show(el);
	}
}
class ItcAccordionFastLinks {
	constructor(target, config) {
		this._el =
			typeof target === 'string' ? document.querySelector(target) : target;
		const defaultConfig = {
			alwaysOpen: true,
			duration: 350,
		};
		this._config = Object.assign(defaultConfig, config);
		this.addEventListener();
	}
	addEventListener() {
		this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.fastlinks__title');
			if (!elHeader) {
				return;
			}
			if (!this._config.alwaysOpen) {
				const elOpenItem = this._el.querySelector('.fastlinks__wrapper_show');
				if (elOpenItem) {
					elOpenItem !== elHeader.parentElement
						? this.toggle(elOpenItem)
						: null;
				}
			}
			this.toggle(elHeader.parentElement);
		});
	}
	show(el) {
		const elBody = el.querySelector('.fastlinks__list');
		if (
			elBody.classList.contains('collapsing') ||
			el.classList.contains('fastlinks__wrapper_show')
		) {
			return;
		}
		elBody.style['display'] = 'block';
		const height = elBody.offsetHeight;
		elBody.style['height'] = 0;
		elBody.style['overflow'] = 'hidden';
		elBody.style['transition'] = `height ${this._config.duration}ms ease`;
		elBody.classList.add('collapsing');
		el.classList.add('fastlinks__wrapper_slidedown');
		elBody.offsetHeight;
		elBody.style['height'] = `${height}px`;
		window.setTimeout(() => {
			elBody.classList.remove('collapsing');
			el.classList.remove('fastlinks__wrapper_slidedown');
			elBody.classList.add('collapse');
			el.classList.add('fastlinks__wrapper_show');
			elBody.style['display'] = '';
			elBody.style['height'] = '';
			elBody.style['transition'] = '';
			elBody.style['overflow'] = '';
		}, this._config.duration);
	}
	hide(el) {
		const elBody = el.querySelector('.fastlinks__list');
		if (
			elBody.classList.contains('collapsing') ||
			!el.classList.contains('fastlinks__wrapper_show')
		) {
			return;
		}
		elBody.style['height'] = `${elBody.offsetHeight}px`;
		elBody.offsetHeight;
		elBody.style['display'] = 'block';
		elBody.style['height'] = 0;
		elBody.style['overflow'] = 'hidden';
		elBody.style['transition'] = `height ${this._config.duration}ms ease`;
		elBody.classList.remove('collapse');
		el.classList.remove('fastlinks__wrapper_show');
		elBody.classList.add('collapsing');
		window.setTimeout(() => {
			elBody.classList.remove('collapsing');
			elBody.classList.add('collapse');
			elBody.style['display'] = '';
			elBody.style['height'] = '';
			elBody.style['transition'] = '';
			elBody.style['overflow'] = '';
		}, this._config.duration);
	}
	toggle(el) {
		el.classList.contains('fastlinks__wrapper_show')
			? this.hide(el)
			: this.show(el);
	}
}
document.addEventListener("DOMContentLoaded", function () {
	new ItcAccordion("#accordion", { alwaysOpen: false, duration: 300 });
});
document.addEventListener("DOMContentLoaded", function () {
	new ItcAccordion("#accordionNew", { alwaysOpen: false, duration: 300 });
});
Fancybox.bind("[data-fancybox]", {
});
// = components/tabs.js
// = components/sliders.js
// = components/card.js
// = components/popup.js
// = components/phone-mask.js
// = components/show-more.js
// = components/youtube.js
// = components/script.js