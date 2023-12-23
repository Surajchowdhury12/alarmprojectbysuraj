setInterval(() => {
    let timefrompc = new Date()
    time_in_HTML.innerHTML=timefrompc.toLocaleTimeString()

}, 1000);

function setAlarm()
{
    let h = hoursHTML.value;
    let m = minutesHTML.value;
    setAlarmtime.innerHTML= h +":" + m +":00"
}

let checkInterval = setInterval(() => {
    let alarmtime= setAlarmtime.innerHTML;
      alarmtime = alarmtime.split(":")
    let alarmhours = alarmtime[0];
    let alarmminutes = alarmtime[1];
    let systemtime = new Date();
    let systemhours = systemtime.getHours();
    let systemminutes = systemtime.getMinutes();
    if(systemhours>12){
        systemhours=systemhours-12;
    }
    if(alarmhours==systemhours && alarmminutes==systemminutes)
    {
        alarmSound.play()
        alarmImage.src="assets/alarm.gif"

    }

}, 1000);