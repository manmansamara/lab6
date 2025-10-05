// Функция поиска по списку актеров
function searchActors(event) {
    const searchInput = event.target.value.toLowerCase(); // Текущий текст поиска
    const resultsContainer = document.querySelector('#results-container');

    // Проверяем наличие совпадающих актеров
    const matchingActors = actorsFilms.filter(([actor]) =>
        actor.toLowerCase().includes(searchInput)
    );

    // Отображаем результаты
    renderResults(matchingActors);
}

// Функция рендера результатов поиска
function renderResults(results) {
    const resultsContainer = document.querySelector('#results-container');
    resultsContainer.innerHTML = ''; // очищаем контейнер перед обновлением

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-match-message">Совпадений не найдено.</p>';
        return;
    }

    results.forEach(([actor, films]) => {
        const table = document.createElement('table');
        table.classList.add('results-table');

        const headerRow = table.insertRow();
        const headerCell = headerRow.insertCell();
        headerCell.colSpan = 2;
        headerCell.innerText = `${actor}`;
        headerCell.style.fontWeight = 'bold';

        films.forEach((film, index) => {
            const row = table.insertRow();
            const cellIndex = row.insertCell();
            cellIndex.innerText = `${index + 1}.`;
            const cellFilm = row.insertCell();
            cellFilm.innerText = film;
        });

        resultsContainer.appendChild(table);
    });
}