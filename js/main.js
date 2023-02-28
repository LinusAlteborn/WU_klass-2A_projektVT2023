//json databas som har all information om spelen
var games = [
    {"name": "8 Ball Pool", "engine": "Scratch"},
    {"name": "Tunnel Runner 3D", "engine": "Scratch"},
    {"name": "Miner Cat 4", "engine": "Scratch"},
    {"name": "Candy Clicker 2", "engine": "Scratch"}
]


var header = ('<nav>' +
'<ul id="nav-links">' +
'    <li><a href="#">About</a></li>' +
'    <li><a href="#">Contact</a></li>' +
'    <li><a href="#">Statistics</a></li>' +
'    <li><a href="#">Developers</a></li>' +
'    <li><a href="#">Forum</a></li>' +
'</ul>' +
'</nav>' +
'<div id="burger">' +
'<div class="hamburger_line" id="line_1"></div>' +
'<div class="hamburger_line" id="line_2"></div>' +
'<div class="hamburger_line" id="line_3"></div>' +
'</div>' +
'<a href="index.html"><h1>Binus Spelus</h1></a>' +
'<a href="login.html" id="nav_account"><img src="img/icons/account.svg" alt="account"></a>'
);

var footer = ('<hr>' +
'<p>Binus© 2023</p>'
);

function header_footer(){
    document.getElementsByTagName("header")[0].innerHTML = header;
    document.getElementsByTagName("footer")[0].innerHTML = footer;
}

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

function addGame(id){
    var new_game = '<a href="game.html?' + (id + 1).toString() + '"><article class="game"><img src="img/thumbnails/' + (id + 1).toString() + '.png" alt="' + games[id].name + '"><h2>' + games[id].name + '</h2></article></a>';
    var binder = document.getElementById("binder");
    binder.innerHTML += new_game;
}

function loadMore(){
    var start = document.getElementById("binder").childElementCount;
    for(var i = start; i < start + 4; i++){
        if (i >= games.length - 1){
            loadMoreButton.remove()
        }
        addGame(i)
    }
}

function handleForm(event) {
    sessionStorage.setItem('username', usernameField.value);
    sessionStorage.setItem('password', passwordField.value);
    sessionStorage.setItem('loggedin', true);
    window.location.assign('../account.html');
    event.preventDefault();
}

function handleSearch(){

}


header_footer();
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
var loadMoreButton = document.getElementById("load-more");
const usernameField = document.getElementById("username_field");
const passwordField = document.getElementById("password_field");
const eye = document.querySelector("#eye")
const form = document.getElementById("form_login");
const formSearch = document.getElementById("formSearch");
burger.addEventListener('click', toggleMenu);
if (document.getElementById("game") != null){
    document.getElementById("game").src = "games/" + location.search.substring(1) + "/index.html";
    document.getElementById("game_info_name").innerHTML = games[location.search.substring(1) - 1].name;
    document.getElementById("game_info_engine").innerHTML = "Made in " + games[location.search.substring(1) - 1].engine;
}
if (document.getElementById("binder") != null){
    loadMoreButton.addEventListener('click', loadMore);
    for(var i = 0; i < 4; i++) {
        if (i >= games.length - 1){
            loadMoreButton.remove()
        }
        addGame(i)
    }
}
if (document.getElementById("form_login") != null){
    form.addEventListener('submit', handleForm);
    eye.addEventListener("click", function(){
        this.classList.toggle("fa-eye-slash")
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password"
        passwordField.setAttribute("type", type)
    })
}
if (document.getElementById("account_info") != null){
    document.getElementById("account_name").innerHTML = sessionStorage.getItem('username');
}
if (sessionStorage.getItem('loggedin')){
    var pfp = document.getElementById("nav_account").children[0];
    document.getElementById("nav_account").href = 'account.html';
    pfp.src = 'img/profile/pfp.avif';
    pfp.style.borderRadius = "100px";
    pfp.style.border = "2px rgb(10,10,70) solid";
    pfp.style.height = "45px";
}
if (document.getElementById("search") != null){
    formSearch.addEventListener('submit', handleSearch);
    console.log("epico");
}
function showPassword() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}