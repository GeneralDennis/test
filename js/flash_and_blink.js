function flashing() {
    var flash = document.getElementById('flash');
    flash.style['animation-name'] = 'flashing';
    flash.style['animation-duration'] = '.5s';
    flash.style['animation-timing-function'] = 'linear';
    setTimeout(function () {
        flash.style['animation-name'] = '';
        flash.style['animation-duration'] = '';
        flash.style['animation-timing-function'] = '';
    }, 500);
};

function blink1() {
    var blink1 = document.getElementById("card_highlight1");
    blink1.style.display = "block";
    blink1.style['animation-name'] = 'blinking';
    blink1.style['animation-duration'] = '.3s';
    blink1.style['animation-timing-function'] = 'linear';
    setTimeout(function () {
        blink1.style['animation-name'] = '';
        blink1.style['animation-duration'] = '';
        blink1.style['animation-timing-function'] = '';
        blink1.style.display = "none";
    }, 300);
};

function blink2() {
    var blink2 = document.getElementById("card_highlight2");
    blink2.style.display = "block";
    blink2.style['animation-name'] = 'blinking';
    blink2.style['animation-duration'] = '.3s';
    blink2.style['animation-timing-function'] = 'linear';
    setTimeout(function () {
        blink2.style['animation-name'] = '';
        blink2.style['animation-duration'] = '';
        blink2.style['animation-timing-function'] = '';
        blink2.style.display = "none";
    }, 300);

};
