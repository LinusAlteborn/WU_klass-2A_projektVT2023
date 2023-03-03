//json databas som har all information om spelen
var games = [
    {"name": "8 Ball Pool", "engine": "Scratch"},
    {"name": "Tunnel Runner 3D", "engine": "Scratch"},
    {"name": "Miner Cat 4", "engine": "Scratch"},
    {"name": "Candy Clicker 2", "engine": "Scratch"}
]

//mina html templates som jag placerar genom javascript för extra flexibilitet och effektivitet
var templates =
{
"header":
(
'<nav id="nav-links">' +
'    <h2><a href="#">About</a></h2>' +
'    <h2><a href="#">Contact</a></h2>' +
'    <h2><a href="#">Forum</a></h2>' +
'</nav>' +
'    <div id="burger">' +
'       <div class="hamburger_line" id="line_1"></div>' +
'       <div class="hamburger_line" id="line_2"></div>' +
'       <div class="hamburger_line" id="line_3"></div>' +
'    </div>' +
'    <h1><a href="index.html">Binus Spelus</a></h1>' +
'<a href="login.html" id="nav-links-login"><img src="img/icons/account.svg" alt="login"></a>'
),

"footer":
(
'<hr>' +
'<p>Binus© 2023</p>'
),

"game":
(
'<img src="img/thumbnails/1.png" alt="name">' +
'<h2>name</h2>'
)
}

function header_footer(){
    document.getElementsByTagName("header")[0].innerHTML = templates.header;
    document.getElementsByTagName("footer")[0].innerHTML = templates.footer;
}

function toggleMenu(){
    burger.classList.toggle('burger-toggle');
    nav.classList.toggle('nav-active');
}

function addGame(id){
    var new_game = document.createElement("a");
    new_game.innerHTML = templates.game;
    new_game.getElementsByTagName("img")[0].src = "img/thumbnails/" + id + ".png";
    new_game.getElementsByTagName("h2")[0].innerHTML = games[id].name;
    new_game.href = "game.html?" + id;
    new_game.classList = "game";
    document.getElementById("binder").appendChild(new_game);
}

function load_more_games(amount){
    var start = document.getElementById("binder").childElementCount - 1;
    for(var i = start; i < start + amount; i++){
        addGame(i);
        if (i >= games.length - 1){
            document.getElementById("load-more").remove();
            return
        }
    }
    document.getElementById("binder").appendChild(document.getElementById("load-more"));
}

function login() {
    if (usernameField.value == sessionStorage.getItem('username')){
        if (passwordField.value == sessionStorage.getItem('password')){
            sessionStorage.setItem('loggedin', true);
            window.location.assign('account.html');
            return
        }
    }
    sessionStorage.setItem('loggedin', false);
    window.location.assign('login.html');
}

function handleForm(event) {
    event.preventDefault();
    submitter = event.submitter.value;
    if (submitter === "login"){ login(); }
    if (submitter === "register"){ register(); }
}

function logout(){
    sessionStorage.setItem('loggedin', false);
    window.location.assign('login.html');
}

function register(){
    sessionStorage.setItem('username', usernameField.value);
    sessionStorage.setItem('password', passwordField.value);
    window.location.assign('login.html');
}

function handleSearch(){

}

header_footer();
const burger = document.getElementById('burger');
burger.addEventListener('click', toggleMenu);
const nav = document.getElementById('nav-links');
const usernameField = document.getElementById("username-field");
const passwordField = document.getElementById("password-field");
const eye = document.getElementsByClassName("eye")[0];
const form = document.getElementsByClassName("form-login-register")[0];
const formSearch = document.getElementById("formSearch");
if (document.getElementById("game") != null){
    document.getElementById("game").src = "games/" + location.search.substring(1) + "/index.html";
    document.getElementById("game_info_name").innerHTML = games[location.search.substring(1)].name;
    document.getElementById("game_info_engine").innerHTML = "Made in " + games[location.search.substring(1)].engine;
}
if (document.getElementById("binder") != null){
    load_more_games(8);
}
if (form != null){
    form.addEventListener('submit', handleForm);
}
if (document.getElementById("account-overview") != null){
    document.getElementById("account-name").innerHTML = sessionStorage.getItem('username');
}
if (sessionStorage.getItem('loggedin') == "true"){
    document.getElementById("nav-links-login").children[0].src = "img/profile/pfp.avif";
    document.getElementById("nav-links-login").href = "account.html";
}
if (document.getElementById("search") != null){
    formSearch.addEventListener('submit', handleSearch);
}
function showPassword() {
    if (passwordField.type == "password") {
        passwordField.type = "text";
        eye.src = "img/icons/hide.svg";
    } else {
        passwordField.type = "password";
        eye.src = "img/icons/view.svg";
    }
}