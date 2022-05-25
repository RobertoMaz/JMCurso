/* ****** Cuenta regresiva ****** */
const d = document;

export default function countDown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id);
    const countDownDate = new Date(limitDate).getTime(); 
    let countDownTempo = setInterval(()=>{
        let nowDate = new Date().getTime();
        let limitTime = countDownDate - nowDate;
        let days = Math.floor(limitTime / (1000 * 60 * 60 *24));
        let hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor(limitTime % (1000 * 60 *60) / (1000 *60))).slice(-2);
        let seconds = ("0" + Math.floor(limitTime % (1000 *60) / 1000)).slice(-2);

        $countdown.innerHTML = `<h3>Faltan:${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`;

        if(limitTime < 0){
            clearInterval(countDownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        }

    },1000)
}