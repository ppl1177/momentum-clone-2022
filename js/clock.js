const clock = document.querySelector("h2#clock");


//intervel 매번 일어나야 하는 것을 말함
//시간이 지나면 실행시키는게 timeout
//padStart, padEnd
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${min}`;
}
getClock()
setInterval(getClock, 1000);