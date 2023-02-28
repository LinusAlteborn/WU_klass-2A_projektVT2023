//json databas som har all information om spelen
var json = {
    "games": [
        {"name": "8 Ball Pool", "engine": "Scratch"},
        {"name": "Tunnel Runner 3D", "engine": "Scratch"},
        {"name": "Miner Cat 4", "engine": "Scratch"},
        {"name": "Candy Clicker 2", "engine": "Scratch"}
    ]
}

var header = '<nav>' +
'<ul id="nav-links">' +
'    <li><a href="#">About</a></li>' +
'    <li><a href="#">Contact</a></li>' +
'</ul>' +
'</nav>' +
'<div id="burger">' +
'<div class="hamburger_line" id="line_1"></div>' +
'<div class="hamburger_line" id="line_2"></div>' +
'<div class="hamburger_line" id="line_3"></div>' +
'</div>' +
'<a href="index.html"><h1>Binus Spelus</h1></a>' +
'<a href="account.html"><img src="img/icons/account.svg" alt="account"></a>';

var footer = '<hr>' +
'<p>Binus© 2023</p>';

function header_footer(){
    document.getElementsByTagName("header")[0].innerHTML = header;
    document.getElementsByTagName("footer")[0].innerHTML = footer;
}

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

function loadMore(){
    var start = document.getElementById("binder").childElementCount;
    for(var i = start; i < start + 4; i++){
        if (i >= json.games.length - 1){
            loadMoreButton.remove()
        }
        document.getElementById("binder").innerHTML += '<a href="game.html?' + (i + 1).toString() + '"><article class="game"><img src="img/thumbnails/' + (i + 1).toString() + '.png" alt="' + json.games[i].name + '"><h2>' + json.games[i].name + '</h2></article></a>';
    }
}

header_footer();
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
const loadMoreButton = document.getElementById("load-more");
burger.addEventListener('click', toggleMenu);
if (document.getElementById("game") != null){
    document.getElementById("game").src = "games/" + location.search.substring(1) + "/index.html";
    document.getElementById("game_info_name").innerHTML = json.games[location.search.substring(1) - 1].name;
    document.getElementById("game_info_engine").innerHTML = "Made in " + json.games[location.search.substring(1) - 1].engine;
}
if (document.getElementById("binder") != null){
    loadMoreButton.addEventListener('click', loadMore);
    for(var i = 0; i < 4; i++) {
        if (i >= json.games.length - 1){
            loadMoreButton.remove()
        }
        document.getElementById("binder").innerHTML += '<a href="game.html?' + (i + 1).toString() + '"><article class="game"><img src="img/thumbnails/' + (i + 1).toString() + '.png" alt="' + json.games[i].name + '"><h2>' + json.games[i].name + '</h2></article></a>';
    }
}