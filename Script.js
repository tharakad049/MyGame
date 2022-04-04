$(function () {
    var container = $('#container');
    var car = $('#car');

    var car1 = $('#car1');
    var car2 = $('#car2');
    var car3 = $('#car3');
    var car4 = $('#car4');
    var car5 = $('#car5');

    var line1 = $('#line1');
    var line2 = $('#line2');
    var line3 = $('#line3');

    var game_over = false;
    var move_left = false;

    $(document).on('keydown', function (e) {
        if (game_over === false){
            var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left == requestAnimationFrame(left);
            }
        }
    });

    $(document).on('keyup', function (e) {
        if (game_over === false){
            var key = e.keyCode;
            if (key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }
        }

    });
    function left() {
        if (game_over === false){
            car.css('left', -5);
            move_left = requestAnimationFrame(left);
        }

    }


});
