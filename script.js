function ClockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = document.getElementById("ampm");
    if(hours>=12)
    {
        if(hours==12)
        {
            meridiem.innerText = "PM";
        }
        else
        {
            hours=hours-12;
            meridiem.innerText = "PM";
        }
    }
    else
    {
        if(hours==0)
        {
            hours=12;
            meridiem.innerText = "AM";
        }
        else
        {
            meridiem.innerText = "AM";
        }
    }
    let hrs=document.getElementById("hrs");
    hrs.innerHTML = `${hours} <br><span style="font-size:16px; color:#5F0089;">hours</span>`;
    let mins=document.getElementById("min");
    mins.innerHTML = `${minutes} <br><span style="font-size:16px; color:#5F0089;">mins</span>`;
    let secs=document.getElementById("sec");
    secs.innerHTML = `${seconds} <br><span style="font-size:16px; color:#5F0089;">secs</span>`;

    let msg1 = document.getElementById("boxChange1");
    let msg2 = document.getElementById("boxChange2");
    let chngImg = document.getElementById("boxChange3");

    if((hours==8 || hours==9 || hours==10 || hours==11)&&(meridiem=="AM"))
    {
        msg1.innerText = "GOOD MORNING!! WAKE UP !!";
        msg2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        chngImg.innerHTML = "<img src='./media/Component 30 – 1.svg' alt='breakfast time'>"; 
    }
    else if((hours==12 || hours==1 || hours==2 || hours==3)&&(meridiem=="PM"))
    {
        msg1.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        msg2.innerText = "LET'S HAVE SOME LUNCH !!";
        chngImg.innerHTML = "<img src='./media/Component 31 – 1.svg' alt='lunch time'>";
    }
    else if((hours==4 || hours==5 || hours==6 || hours==7)&&(meridiem=="PM"))
    {
        msg1.innerText = "GOOD EVENING !!";
        msg2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        chngImg.innerHTML = "<img src='./media/evening.jpg' alt='evening snacks' width=536px height=345px>";
    }
    else
    {
        msg1.innerText = "GOOD NIGHT !!";
        msg2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        chngImg.innerHTML = "<img src='./media/Component 32 – 1.svg' alt='good night'>";
    }
}
setInterval(() => {
    ClockStart();
}, 1000);

let alarmBtn = document.getElementById("alarmBtn");
let time1 = document.getElementById("time1");
let time2 = document.getElementById("time2");
let time3 = document.getElementById("time3");
let time4 = document.getElementById("time4");
let alarm1 = document.getElementById("alarm1");
let alarm2 = document.getElementById("alarm2");
let alarm3 = document.getElementById("alarm3");
let alarm4 = document.getElementById("alarm4");

alarmBtn.addEventListener("click", function(event){
    alarmBtn.style.backgroundImage = "linear-gradient(to left,#6E54EC,#CB52F8,#FC5EFF,#F1A7C5)";
    alarmBtn.innerText = "Party Time!";
    time1.innerText = alarm1.value;
    time2.innerText = alarm2.value;
    time3.innerText = alarm3.value;
    time4.innerText = alarm4.value;
})