document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var actorName = document.getElementById('actorInput').value.trim();
    var resultsDiv = document.getElementById('results');

    // Получаем данные из JSON
    fetch('/data.json')  // Относительный путь к файлу на GitHub Pages
        .then(response => response.json())
        .then(data => {
            if (actorName in data) {
                let moviesList = data[actorName].map(movie => `<li>${movie}</li>`).join('');
                resultsDiv.innerHTML = `
                    <ul style="list-style-type: disc;">${moviesList}</ul>
                `;
            } else {
                resultsDiv.innerHTML = '<p>Нет информации о фильмах данного актера.</p>';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            resultsDiv.innerHTML = '<p>Возникла ошибка при загрузке данных.</p>';
        });
});