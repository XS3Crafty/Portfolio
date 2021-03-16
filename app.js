//current

var current = document.getElementById('current')
currList = ['🎶 listening - Mayer', '🎬 watching - The Dark Knight',
    '💻 learning - ecommerce react applications', '🎶 listening - Stevie Ray Vaughan',
    '🎬 watching - Scrubs', '🎶 listening - Hendrix',
    '🎬 watching - Monty Python', '🎬 watching - Mr. Bean', '💻 learning - full stack development',
    '🎶 listening - Lenny Kravitz', '🎶 listening - 070 Shake',
    '📕 reading - The Double', '💻 learning - webGL',
    '📕 reading - Into the Wild', '💼 working - on a secret government project', '🎬 watching - a random sitcom',
    '🎬 watching - a bad movie', '💻 learning - react native',
    '🎶 listening - Bob Marley', '🎶 listening - Zeppelin',
    '📕 reading - Berenice', '💻 learning - guitar',
    '💻 learning - to draw portraits', '💼 working - on polishing my skills']

function changeCurrent() {
    currList.push(currList.shift());
    current.innerHTML = currList[0];
}

setInterval(changeCurrent, 10000);

//icon

var icon = document.getElementById('memoji');
iconList = ['assets/images/icon.png', "assets/images/icon1.png",
    "assets/images/icon2.png", "assets/images/icon3.png",
    "assets/images/icon4.png"];

function changeIcon() {
    icon.src = iconList[Math.floor(Math.random() * iconList.length)]
}

//time 

function daysIntoYear(date) {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    document.getElementById('day').innerHTML = '#' + checkDay(daysIntoYear(today));
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function checkDay(i) {
    if (i < 100) { i = "0" + i };
    return i;
}

//email 

const email = document.getElementById('email');

$("#email").click(function () {
    document.execCommand('copy')
    document.getElementById('email-popup').style.display = 'block'
});

$("#close").click(function () {
    document.getElementById('email-popup').style.display = 'none'
});

email.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", "saddagada98@outlook.com");
    }
});

window.onload = function () {
    changeIcon();
    startTime();
}