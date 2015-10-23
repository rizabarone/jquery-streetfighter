
 $(document).ready(function() {
      $('.ryu-action').hide();
       $('.ryu-still').show();

    $('.ryu').mouseenter(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });

    $('.ryu').mouseleave(function() {
       $('.ryu-action').hide();
        $('.ryu-still').show();
    });

    $('.ryu').mousedown(function() {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '1020px'
            },
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');

            });
    });


    $('.ryu').mouseup(function() {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });



});

$(document).keydown(function(key) {
    if (key.keyCode == 88) {
        playSoundCool();
        $('.ryu-action').hide();
        $('.ryu-cool').show();
    }

});

$(document).keyup(function(key) {
    if (key.keycode == 88) {
        $('#sound-cool')[0].pause();
        $('#sound-cool')[0].load();
        $('.ryu-action').hide();
        $('.ryu-still').show();
    }

});


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

var coolSound = false;

function playSoundCool() {
    coolSound = !coolSound;
    if (coolSound) {
        // $('#cool')[0].load()
        $('#sound-cool')[0].play();
    }
}


function doIntro() {
    $('#ryu-stage')[0].volume = 0.3;
    $('#ryu-stage')[0].play();
    $('.streetfighter').fadeIn(3500, function() {
        $(this).fadeOut(1000, function() {
            $('.brought-by').fadeIn(1500, function() {
                $(this).fadeOut(1000, function() {
                    $('.jquery').fadeIn(1500, function() {
                        $(this).fadeOut(1500, function() {
                            $('.how-to').fadeIn(1000);
                        });
                    })
                })
            })
        })
    })
}
 