function showTime() {
    var date = new Date();
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = week[date.getDay()];

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m + " : " + s;
    var MyClockDisplay = document.getElementById("MyClockDisplay");
    MyClockDisplay.innerText = time;
    document.getElementById("week").innerHTML = d;
    setTimeout(showTime, 1000);
}
showTime();

var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "../clock/audio/Sedaye.Baran(10).mp3";

document.body.addEventListener("click", function() {
    audio.play();
})