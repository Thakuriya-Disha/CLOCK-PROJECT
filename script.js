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

let dateCopy = new Date();
let hrsNow = dateCopy.getHours();
let msg1 = document.getElementById("boxChange1");
let msg2 = document.getElementById("boxChange2");
let chngImg = document.getElementById("boxChange3");

if(hrsNow==8 || hrsNow==9 || hrsNow==10 || hrsNow==11)
{
    msg1.innerText = "GOOD MORNING!! WAKE UP !!";
    msg2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    chngImg.innerHTML = "<img src='./media/Component 30 – 1.svg' alt='breakfast time'>";
}
if(hrsNow==12 || hrsNow==13 || hrsNow==14 || hrsNow==15)
{
    msg1.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    msg2.innerText = "LET'S HAVE SOME LUNCH !!";
    chngImg.innerHTML = "<img src='./media/Component 31 – 1.svg' alt='lunch time'>";
}
if(hrsNow==16 || hrsNow==17 || hrsNow==18 || hrsNow==19)
{
    msg1.innerText = "GOOD EVENING !!";
    msg2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    chngImg.innerHTML = "<img src='./media/evening.jpg' alt='evening snacks' width=536px height=345px>";
}
if(hrsNow>=20 || hrsNow<=7)
{
    msg1.innerText = "GOOD NIGHT !!";
    msg2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    chngImg.innerHTML = "<img src='./media/Component 32 – 1.svg' alt='good night'>";
}