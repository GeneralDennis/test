function intervals() {
    setTimeout(function () {
        raindrop1()
    }, 200);
    setTimeout(function () {
        raindrop2()
    }, 500);
    setTimeout(function () {
        raindrop3()
    }, 900);
    setTimeout(function () {
        raindrop4()
    }, 100);
    setTimeout(function () {
        raindrop5()
    }, 200);
    setTimeout(function () {
        raindrop6()
    }, 600);
    setTimeout(function () {
        raindrop7()
    }, 500);
    setTimeout(function () {
        raindrop8()
    }, 800);
    setTimeout(function () {
        raindrop9()
    }, 1000);
    setTimeout(function () {
        raindrop10()
    }, 700);
    setTimeout(function () {
        raindrop11()
    }, 500);
    setTimeout(function () {
        raindrop12()
    }, 600);
    setTimeout(function () {
        raindrop13()
    }, 700);
    setTimeout(function () {
        raindrop14()
    }, 400);
    setTimeout(function () {
        raindrop15()
    }, 500);
    setTimeout(function () {
        raindrop16()
    }, 500);
    setTimeout(function () {
        raindrop17()
    }, 700);
    setTimeout(function () {
        raindrop18()
    }, 800);
    setTimeout(function () {
        raindrop19()
    }, 500);
    setTimeout(function () {
        raindrop20()
    }, 600);
};

function raining() {
    function rain() {
        var interval = setInterval(function () {
            intervals();
        }, 3700);
        setTimeout(function () {
            clearInterval(interval);
        }, 20000);

    };
    var range = document.getElementById("range");
    var rain_container = document.getElementsByClassName("rain_container");
    if (range >= 3 && range <= 21) {
        rain_container.style.display = "block";
    } else {
        clearInterval(interval);
        rain_container.style.display = "none";
    };
};

function raindrop1() {
    var drop13 = document.getElementById('drop1');
    drop1.style.display = "block";
    drop1.style['animation-name'] = 'raindrop';
    drop1.style['animation-duration'] = '.7s';
    drop1.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop1.style['animation-name'] = 'rainflow';
        drop1.style['animation-duration'] = '1.2s';
        drop1.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop1.style.display = "none";
    }, 2700);
};

function raindrop2() {
    var drop13 = document.getElementById('drop2');
    drop2.style.display = "block";
    drop2.style['animation-name'] = 'raindrop';
    drop2.style['animation-duration'] = '.7s';
    drop2.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop2.style['animation-name'] = 'rainflow';
        drop2.style['animation-duration'] = '1.2s';
        drop2.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop2.style.display = "none";
    }, 2700);
};

function raindrop3() {
    var drop13 = document.getElementById('drop3');
    drop13.style.display = "block";
    drop13.style['animation-name'] = 'raindrop';
    drop13.style['animation-duration'] = '.7s';
    drop13.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop13.style['animation-name'] = 'rainflow';
        drop13.style['animation-duration'] = '1.2s';
        drop13.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop13.style.display = "none";
    }, 2700);
};

function raindrop4() {
    var drop4 = document.getElementById('drop4');
    drop4.style.display = "block";
    drop4.style['animation-name'] = 'raindrop';
    drop4.style['animation-duration'] = '.7s';
    drop4.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop4.style['animation-name'] = 'rainflow';
        drop4.style['animation-duration'] = '1.2s';
        drop4.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop4.style.display = "none";
    }, 2700);
};

function raindrop5() {
    var drop5 = document.getElementById('drop5');
    drop5.style.display = "block";
    drop5.style['animation-name'] = 'raindrop';
    drop5.style['animation-duration'] = '.7s';
    drop5.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop5.style['animation-name'] = 'rainflow';
        drop5.style['animation-duration'] = '1.2s';
        drop5.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop5.style.display = "none";
    }, 2700);
};

function raindrop6() {
    var drop6 = document.getElementById('drop6');
    drop6.style.display = "block";
    drop6.style['animation-name'] = 'raindrop';
    drop6.style['animation-duration'] = '.7s';
    drop6.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop6.style['animation-name'] = 'rainflow';
        drop6.style['animation-duration'] = '1.2s';
        drop6.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop6.style.display = "none";
    }, 2700);
};

function raindrop7() {
    var drop7 = document.getElementById('drop7');
    drop7.style.display = "block";
    drop7.style['animation-name'] = 'raindrop';
    drop7.style['animation-duration'] = '.7s';
    drop7.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop7.style['animation-name'] = 'rainflow';
        drop7.style['animation-duration'] = '1.2s';
        drop7.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop7.style.display = "none";
    }, 2700);
};

function raindrop8() {
    var drop8 = document.getElementById('drop8');
    drop8.style.display = "block";
    drop8.style['animation-name'] = 'raindrop';
    drop8.style['animation-duration'] = '.7s';
    drop8.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop8.style['animation-name'] = 'rainflow';
        drop8.style['animation-duration'] = '1.2s';
        drop8.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop8.style.display = "none";
    }, 2700);
};

function raindrop9() {
    var drop9 = document.getElementById('drop9');
    drop9.style.display = "block";
    drop9.style['animation-name'] = 'raindrop';
    drop9.style['animation-duration'] = '.7s';
    drop9.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop9.style['animation-name'] = 'rainflow';
        drop9.style['animation-duration'] = '1.2s';
        drop9.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop9.style.display = "none";
    }, 2700);
};

function raindrop10() {
    var drop10 = document.getElementById('drop10');
    drop10.style.display = "block";
    drop10.style['animation-name'] = 'raindrop';
    drop10.style['animation-duration'] = '.7s';
    drop10.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop10.style['animation-name'] = 'rainflow';
        drop10.style['animation-duration'] = '1.2s';
        drop10.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop10.style.display = "none";
    }, 2700);
};

function raindrop11() {
    var drop11 = document.getElementById('drop11');
    drop11.style.display = "block";
    drop11.style['animation-name'] = 'raindrop';
    drop11.style['animation-duration'] = '.7s';
    drop11.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop11.style['animation-name'] = 'rainflow';
        drop11.style['animation-duration'] = '1.2s';
        drop11.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop11.style.display = "none";
    }, 2700);
};

function raindrop12() {
    var drop12 = document.getElementById('drop12');
    drop12.style.display = "block";
    drop12.style['animation-name'] = 'raindrop';
    drop12.style['animation-duration'] = '.7s';
    drop12.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop12.style['animation-name'] = 'rainflow';
        drop12.style['animation-duration'] = '1.2s';
        drop12.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop12.style.display = "none";
    }, 2700);
};

function raindrop13() {
    var drop13 = document.getElementById('drop13');
    drop13.style.display = "block";
    drop13.style['animation-name'] = 'raindrop';
    drop13.style['animation-duration'] = '.7s';
    drop13.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop13.style['animation-name'] = 'rainflow';
        drop13.style['animation-duration'] = '1.2s';
        drop13.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop13.style.display = "none";
    }, 2700);
};

function raindrop14() {
    var drop14 = document.getElementById('drop14');
    drop14.style.display = "block";
    drop14.style['animation-name'] = 'raindrop';
    drop14.style['animation-duration'] = '.7s';
    drop14.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop14.style['animation-name'] = 'rainflow';
        drop14.style['animation-duration'] = '1.2s';
        drop14.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop14.style.display = "none";
    }, 2700);
};

function raindrop15() {
    var drop15 = document.getElementById('drop15');
    drop15.style.display = "block";
    drop15.style['animation-name'] = 'raindrop';
    drop15.style['animation-duration'] = '.7s';
    drop15.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop15.style['animation-name'] = 'rainflow';
        drop15.style['animation-duration'] = '1.2s';
        drop15.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop15.style.display = "none";
    }, 2700);
};

function raindrop16() {
    var drop16 = document.getElementById('drop16');
    drop16.style.display = "block";
    drop16.style['animation-name'] = 'raindrop';
    drop16.style['animation-duration'] = '.7s';
    drop16.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop16.style['animation-name'] = 'rainflow';
        drop16.style['animation-duration'] = '1.2s';
        drop16.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop16.style.display = "none";
    }, 2700);
};

function raindrop17() {
    var drop17 = document.getElementById('drop17');
    drop17.style.display = "block";
    drop17.style['animation-name'] = 'raindrop';
    drop17.style['animation-duration'] = '.7s';
    drop17.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop17.style['animation-name'] = 'rainflow';
        drop17.style['animation-duration'] = '1.2s';
        drop17.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop17.style.display = "none";
    }, 2700);
};

function raindrop18() {
    var drop18 = document.getElementById('drop18');
    drop18.style.display = "block";
    drop18.style['animation-name'] = 'raindrop';
    drop18.style['animation-duration'] = '.7s';
    drop18.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop18.style['animation-name'] = 'rainflow';
        drop18.style['animation-duration'] = '1.2s';
        drop18.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop18.style.display = "none";
    }, 2700);
};

function raindrop19() {
    var drop19 = document.getElementById('drop19');
    drop19.style.display = "block";
    drop19.style['animation-name'] = 'raindrop';
    drop19.style['animation-duration'] = '.7s';
    drop19.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop19.style['animation-name'] = 'rainflow';
        drop19.style['animation-duration'] = '1.2s';
        drop19.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop19.style.display = "none";
    }, 2700);
};

function raindrop20() {
    var drop20 = document.getElementById('drop20');
    drop20.style.display = "block";
    drop20.style['animation-name'] = 'raindrop';
    drop20.style['animation-duration'] = '.7s';
    drop20.style['animation-timing-function'] = 'ease-out';
    setTimeout(function () {
        drop20.style['animation-name'] = 'rainflow';
        drop20.style['animation-duration'] = '1.2s';
        drop20.style['animation-timing-function'] = 'ease-in';
    }, 1500);
    setTimeout(function () {
        drop20.style.display = "none";
    }, 2700);
};
