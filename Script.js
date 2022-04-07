$(function () {
    var container = $('#container');
    var car = $('#car');

    var car1 = $('#car1');
    var car2 = $('#car2');
    var car3 = $('#car3');
    var car4 = $('#car4');
    var car5 = $('#car5');
    var score = $('#score');

    var game_over = false;
    var move_left = false;
    var move_right = false;
    var move_up = false;
    var move_down = false;

    var animationId;
    animationId = requestAnimationFrame(repeat);

    var containerWidth = parseInt(container.width());
    var containerHeight = parseInt(container.height());
    var carWidth = parseInt(car.width());
    var carHeight = parseInt(car.height());

    var carSpeed = 2;
    var countScore = 1;

    $(document).on('keydown', function (e) {
        if (game_over == false){
            var key = e.keyCode;
            if(key == 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }else if (key == 38 && move_up == false){
                move_up = requestAnimationFrame(up);
            }else if (key == 39 && move_right === false){
                move_right = requestAnimationFrame(right);
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
            }else if (key == 38){
                cancelAnimationFrame(move_up);
                move_up = false;
            }else if (key == 39){
                cancelAnimationFrame(move_right);
                move_right = false;
            }else if (key == 40){
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

    function left() {
        if (game_over == false && parseInt(car.css('left')) > 10){
            car.css('left',parseInt(car.css('left')) -4);
            move_left = requestAnimationFrame(left);
        }
    }
    function right() {
        if (game_over == false && parseInt(car.css('left')) < containerWidth - (carWidth+10)){
            car.css('left', parseInt(car.css('left')) +4);
            move_right = requestAnimationFrame(right);
        }
    }
    function up() {
        if (game_over == false && parseInt(car.css('top')) > 10){
            car.css('top',parseInt(car.css('top')) -2);
            move_up = requestAnimationFrame(up)
        }
    }
    function down() {
        if (game_over == false && parseInt(car.css('top')) < containerHeight - (carHeight+10)){
            car.css('top', parseInt(car.css('top')) +2);
            move_down = requestAnimationFrame(down)
        }
    }

    function carDown(car){
        var carTop = parseInt(car.css('top'));
        if (carTop > containerHeight){
            carTop = -200;
            var carLeft = parseInt(Math.random()*(containerWidth - carWidth));
            car.css('left', carLeft);
        }
        car.css('top', carTop + carSpeed);
    }

    function repeat() {
        if (game_over == false){
            if (face(car, car1) || face(car, car2) || face(car, car3) || face(car, car4) || face(car, car5)) {
                stopGame();
            }
            countScore++;
            if (countScore % 50 == 0){
                score.text(parseInt(score.text()) + 1);
            }
            if (countScore % 1000 == 0){
                carSpeed++;
                countScore++;
            }

            carDown(car1);
            carDown(car2);
            carDown(car3);
            carDown(car4);
            carDown(car5);

            animationId = requestAnimationFrame(repeat);
        }
    }
    function stopGame() {
        game_over = true;
        cancelAnimationFrame(animationId);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
    }
    function face(rectone, recttwo){

        var r1 = $(rectone);
        var r2 = $(recttwo);

        var r1x = r1.offset().left;
        var r1w = r1.width();
        var r1y = r1.offset().top;
        var r1h = r1.height();

        var r2x = r2.offset().left;
        var r2w = r2.width();
        var r2y = r2.offset().top;
        var r2h = r2.height();

        if( r1y+r1h < r2y ||
            r1y > r2y+r2h ||
            r1x > r2x+r2w ||
            r1x+r1w < r2x ){
            return false;
        }else{
            return true;
        }

    }
});