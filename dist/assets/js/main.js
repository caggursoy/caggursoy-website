(function () {
	'use strict';

	var toggle = document.querySelector('.nav-toggle');
	var links = document.querySelector('.nav-links');
	if (toggle && links) {
		toggle.addEventListener('click', function () {
			links.classList.toggle('open');
		});
	}

	var yearEl = document.getElementById('year');
	if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

	var skillRows = document.querySelectorAll('.skill-row');
	if (skillRows.length && 'IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.4 });
		skillRows.forEach(function (row) { observer.observe(row); });
	} else {
		skillRows.forEach(function (row) { row.classList.add('in-view'); });
	}
})();
