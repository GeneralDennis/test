function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: 363,
        height: 202,
        videoId: '9xKR8Vcjias',
        events: {
            'onReady': onPlayerReady
        }
    });
};

function showVideoFrame() {
    $('#range').on('input', function () {
        var range = document.getElementById("range").value;
        if (range == 0) {
            player.playVideo();
            $('iframe').css({
                display: "block"
            });
            $('#highlight').css({
                display: "block"
            });
        } else if (range == 28) {
            flashing();
        } else {
            player.pauseVideo();
            $('iframe').css({
                display: "none"
            });
            $('#highlight').css({
                display: "block"
            });
        };
    });
};

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
};
