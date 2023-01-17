function ClockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hrs=document.getElementById("hrs");
    hrs.innerHTML = `${hours} <br><span style="font-size:16px">hours</span>`;
    let mins=document.getElementById("min");
    mins.innerHTML = `${minutes} <br><span style="font-size:16px">mins</span>`;;
    let secs=document.getElementById("sec");
    secs.innerHTML = `${seconds} <br><span style="font-size:16px">secs</span>`;;

    if(hours > 12)
    {
        hours = hours - 12;
        let pm = document.getElementById("ampm");
        pm.innerText = "PM";
    }
    else
    {
        let am = document.getElementById("ampm");
        am.innerText = "AM";
    }
}
setInterval(() => {
    ClockStart();
}, 1000);