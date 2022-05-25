/* ****** Evento teclado ****** */
const d = document;
let x = 0, 
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();

    //console.log(e.keyCode);
    //console.log(e.key);


    switch(e.keyCode){
        // izquierda
        case 37:
            if(limitsBall.left > limitsStage.left){
                e.preventDefault();
                x--;
            } 
            break;
        // arriba
        case 38:
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
            }
            break;
        // derecha
        case 39:
           if(limitsBall.right < limitsStage.right){
            e.preventDefault();
            x++;
           } 
            break;
        // abajo
        case 40:
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            }
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

export function shortCuts(e) {

}