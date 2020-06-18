document.addEventListener('DOMContentLoaded', function() {

	// Добавляем событие клика
	document.querySelector('.projects-categories').addEventListener('click', ({target})=>{

		const cls = target.dataset.id; // Переменная для атрибута data-id

		document.querySelectorAll('.projects-list .projects-item').forEach(item => {

			const add = cls == 'all' || item.classList.contains(cls);

			item.classList.toggle('visibility', add)

		})
	})
});