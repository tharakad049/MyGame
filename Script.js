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
    var move_right = false;
    var move_up = false;
    var move_down = false;

    animationId = requestAnimationFrame(repeat);

    $(document).on('keydown', function (e) {
        if (game_over == false){
            var key = e.keyCode;
            if(key == 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }else if (key == 39 && move_right === false){
                move_right = requestAnimationFrame(right);
            }else if (key == 38 && move_up == false){
                move_up = requestAnimationFrame(up);
            }else if (key == 40 && move_down == false){
                move_down = requestAnimationFrame(down);
            }
        }
    });


    $(document).on('keyup', function (e) {
        if (game_over == false){
            var key = e.keyCode;
            if (key == 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }else if (key == 39){
                cancelAnimationFrame(move_right);
                move_right = false;
            }else if (key == 38){
                cancelAnimationFrame(move_up);
                move_up = false;
            }else if (key == 40){
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }

    });
    function left() {
        if (game_over == false){
            car.css('left',parseInt(car.css('left')) -5);
            move_left = requestAnimationFrame(left);
        }
    }
    function right() {
        if (game_over == false){
            car.css('left', parseInt(car.css('left'))+5);
            move_right = requestAnimationFrame(right);
        }
    }
    function up() {
        if (game_over == false){
            car.css('top',parseInt(car.css('top')) -3);
            move_up = requestAnimationFrame(up)
        }
    }
    function down() {
        if (game_over == false){
            car.css('top', parseInt(car.css('top'))+3);
            move_down = requestAnimationFrame(down)
        }
    }

    function repeat() {
        if (game_over == false){
            carDown(car1);
            carDown(car2);
            carDown(car3);
            carDown(car4);
            carDown(car5);

            lineDown(line1);
            lineDown(line2);
            lineDown(line3);

            animationId = requestAnimationFrame(repeat);
        }
    }

    function carDown(car){

    }
    function lineDown(line) {
    }
});
