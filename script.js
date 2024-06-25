const switchElement = document.getElementById('color-switch');
const audio = document.getElementById('myAudio');
const body = document.body;

switchElement.addEventListener('change', () => {
    if (switchElement.checked) {
        // Включить воспроизведение аудио
        audio.play();
        // Изменить фон на красный
        body.style.backgroundColor = 'red';
    } else {
        // Остановить воспроизведение аудио
        audio.pause();
        // Вернуть фон в изначальный цвет (синий)
        body.style.backgroundColor = 'blue';
    }
});
