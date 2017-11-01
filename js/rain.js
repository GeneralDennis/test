var inputRange = document.querySelector('input[type="range"]');
document.addEventListener('input', changeRange, true)

function changeRange(e) {
    if (e.target.value >= 3 && e.target.value <= 23) {
        StartRain();
    } else {
        StopRain();
    }
};

function randomNumber(min, max) {
    var numb = Math.floor(Math.random() * (max - min + 1) + min);
    return numb;
};

var drops = [];
var stopRainTimer;
var raining = false;

function StartRain() {

    window.setTimeout(stopRainTimer);

    if (raining) {
        return;
    }
    raining = true;
    rainTimer = setInterval(addNewRainDrop, 200);
    stopRainTimer = setTimeout(StopRain, 22000);
}


function StopRain() {

    if (!raining) {
        return;
    }

    raining = false;
    window.clearInterval(rainTimer);
    document.getElementById('rain_container').innerHTML = "";
}

function addNewRainDrop() {

    var new_rainDrop = document.createElement('div');
    drops.push(new_rainDrop);
    //Новый элемент div
    var myNewClass = randomNumber(1, 4);
    //Случайный выбр номера класса
    /*alert('My new class is ' + myNewClass);*/
    var newRainDropClass = 'rainDrop_' + myNewClass;
    //Добавление случайного номера класса к названию, т.е. создание названия одного из классов
    /*alert('My new random class is ' + newRainDropClass);*/
    new_rainDrop.className = newRainDropClass;
    //Присвоение созданному ранее элементу случайно созданного названия класса
    document.getElementById('rain_container').appendChild(new_rainDrop);
    //Вставка нового элемента со случайным классом в контейнер
    var leftPos = randomNumber(0, 400);
    //создание случайной позиции - слева
    var topPos = randomNumber(0, 220);
    //создание случайной позиции - сверху
    new_rainDrop.style.left = leftPos + "px";
    //Присвоение элементу случайной позиции  - слева
    new_rainDrop.style.top = topPos + "px";
    //Присвоение элементу случайной позиции  - сверху
    setTimeout(function () {
        new_rainDrop.style.transform = 'scale(2)';
    }, 250)
    setTimeout(function () {
        new_rainDrop.style.top = (parseInt(topPos) + 250) + 'px';
        new_rainDrop.style.transform = 'scale(1)';
    }, 1200);
};
