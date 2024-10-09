// Проверка, есть ли сохранённый счёт в localStorage
let score = localStorage.getItem('clickScore') ? parseInt(localStorage.getItem('clickScore')) : 0;

// Обновляем отображение счётчика на странице
document.getElementById('scoreboard').innerText = 'Clicks: ' + score;

// Обработчик события для кнопки
document.getElementById('clickerButton').addEventListener('click', function() {
    score += 1; // или на 0.00001 для монеток
    document.getElementById('scoreboard').innerText = 'Clicks: ' + score;

    // Сохраняем новое значение счётчика в localStorage
    localStorage.setItem('clickScore', score);
});
