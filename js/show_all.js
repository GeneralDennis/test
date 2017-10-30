function showPhone() {
    var pic = document.getElementById("pic");
    var range = document.getElementById("range").value;
    var images = [
                "images/phone/phone_00000.png",
                "images/phone/phone_00001.png",
                "images/phone/phone_00002.png",
                "images/phone/phone_00003.png",
                "images/phone/phone_00004.png",
                "images/phone/phone_00005.png",
                "images/phone/phone_00006.png",
                "images/phone/phone_00007.png",
                "images/phone/phone_00008.png",
                "images/phone/phone_00009.png",
                "images/phone/phone_00010.png",
                "images/phone/phone_00011.png",
                "images/phone/phone_00012.png",
                "images/phone/phone_00013.png",
                "images/phone/phone_00014.png",
                "images/phone/phone_00015.png",
                "images/phone/phone_00016.png",
                "images/phone/phone_00017.png",
                "images/phone/phone_00018.png",
                "images/phone/phone_00019.png",
                "images/phone/phone_00020.png",
                "images/phone/phone_00021.png",
                "images/phone/phone_00022.png",
                "images/phone/phone_00023.png",
                "images/phone/phone_00024.png",
                "images/phone/phone_00025.png",
                "images/phone/phone_00026.png",
                "images/phone/phone_00027.png",
                "images/phone/phone_00028.png",
                "images/phone/phone_00029.png",
                "images/phone/phone_00030.png",
                "images/phone/phone_00031.png",
                "images/phone/phone_00032.png",
                "images/phone/phone_00033.png",
                "images/phone/phone_00034.png",
                "images/phone/phone_00035.png",
                "images/phone/phone_00036.png",
                "images/phone/phone_00037.png",
                "images/phone/phone_00038.png",
                "images/phone/phone_00039.png",
                "images/phone/phone_00040.png",
                "images/phone/phone_00041.png",
                "images/phone/phone_00042.png",
                "images/phone/phone_00043.png",
                "images/phone/phone_00044.png",
                "images/phone/phone_00045.png",
                "images/phone/phone_00046.png",
                "images/phone/phone_00047.png",
                "images/phone/phone_00048.png",
                "images/phone/phone_00049.png",
                "images/phone/phone_00050.png",
                "images/phone/phone_00051.png",
                "images/phone/phone_00052.png",
                "images/phone/phone_00053.png",
                "images/phone/phone_00054.png",
                "images/phone/phone_00055.png",
                "images/phone/phone_00056.png",
                "images/phone/phone_00057.png",
                "images/phone/phone_00058.png",
                "images/phone/phone_00058.png"
            ];

    pic.setAttribute('src', images[range]);
    if (range == 59) {
        $('#internals').fadeIn(500, function () {
            setTimeout(blink1, 200);
            setTimeout(blink2, 400);
            $('#internals').css({
                display: "block"
            });
        });

    } else {
        $('#internals').css({
            display: "none"
        });
    };
    if (range == 0 || range == 1 || range == 2) {
        $('#text1').fadeIn(1000);
        $('#text2').hide();
        $('#text3').hide();
        $('#text4').hide();
    } else if (range == 3 || range == 23) {
        $('#text1').hide();
        $('#text2').fadeIn(1000);
        $('#text3').hide();
        $('#text4').hide();
    } else if (range == 24 || range == 48) {
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').fadeIn(1000);
        $('#text4').hide();
    } else if (range == 49) {
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').hide();
        $('#text4').fadeIn(1000);
    };
};

function close() {

    $('.closeContainer').on("click", function () {
        $('.container').css({
            display: 'none'
        });
    });
};


function startApp() {
    var startApp = document.getElementById('myphone');
    startApp.style['animation-name'] = 'startApp';
    startApp.style['animation-duration'] = '.7s';
    startApp.style['animation-timing-function'] = 'linear';
    showPhone();
    showVideoFrame();
};

function showAdvise() {
    $('#advise').fadeIn(500);
};

function showBuyButton() {
    $('#buy').fadeIn(500);
};
