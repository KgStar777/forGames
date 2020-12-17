let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d'); //Получение контекста — через него можно работать с холстом
let scale = 0.1; //Масштаб машин

Resize(); // При загрузке страницы задаётся размер холста

window.addEventListener('resize', Resize); //При изменении размеров окна будут меняться размеры холста

window.addEventListener('keydown', function(e) {Keydown(e);}); //Получение нажатий с клавиатуры

let objects = [];
let road = [];
let player = null; //Объект, которым управляет игрок, — тут будет указан номер объекта в массиве objects

function Start() {
    timer = setInterval(Update, 1000 / 60); //Состояние игры будет обновляться 60 раз в секунду — при такой частоте обновление происходящего будет казаться очень плавным
}
function Stop() {
    clearInterval(timer); //Остановка обновления
}
function Update() { //Обновление игры
    Draw();
}
function Draw() { //Работа с графикой
    ctx.clearRect(0, 0, canvas.width, canvas.height);     //Очистка холста от предыдущего кадра. Метод clearRect(x, y, width, height) очищает заданную область пикселей внутри данного прямоугольника.
}
function Keydown(e) {
    switch (e.KeyCode) { //Свойство event.keyCode позволяет узнать нажатую клавишу при вводе текста
        case 37 || 65: //left
            
            break;
        case 39 || 68: //right
            
            break;
        case 38 || 87: //up
            
            break;
        case 40 || 83: //down
            
            break;
        case 27: //esc
            
            break;
    }
}
function Resize () { //Получаем внутренний размер окна без полос прокрутки
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}