// Data för alla mina spel
var games = [
    {"name": "8 Ball Pool", "engine": "Scratch"},
    {"name": "Tunnel Runner 3D", "engine": "Scratch"},
    {"name": "Miner Cat 4", "engine": "Scratch"},
    {"name": "Candy Clicker 2", "engine": "Scratch"}
]

// Mina html templates som jag placerar i html sidor (jag använder semikolon för att kunna gömma dem templates jag inte använder)
var templates ={
    "header":(
    '<nav id="nav-links">' +
    '   <h2><a href="about.html">About</a></h2>' +
    '   <h2><a href="#">Contact</a></h2>' +
    '   <h2><a href="#">Forum</a></h2>' +
    '</nav>' +
    '<div id="burger">' +
    '   <div></div>' +
    '   <div></div>' +
    '   <div></div>' +
    '</div>' +
    '<h1><a href="index.html">Binus Spelus</a></h1>' +
    '<a href="login.html" id="nav-links-login"><img src="img/icons/account.svg" alt="login"></a>'
    ),

    "footer":(
    '<hr>' +
    '<p>Binus© 2023</p>'
    )
}

// Funktioner som jag kommer använda senare
function load_header_and_footer(){
    document.getElementsByTagName("header")[0].innerHTML = templates.header;
    document.getElementsByTagName("footer")[0].innerHTML = templates.footer;
}

function burger_menu(){
    document.getElementById('burger').classList.toggle('burger-toggle');
    document.getElementById('nav-links').classList.toggle('nav-active');
}

function add_game(game_id){
    var new_game = Object.assign(document.createElement('a'), {href:`game.html?${game_id}`, classList:"game"});
    new_game.appendChild(Object.assign(document.createElement('img'), {src:`img/thumbnails/${game_id}.png`, alt:games[game_id].name}));
    new_game.appendChild(Object.assign(document.createElement('h2'), {innerHTML:games[game_id].name}));

    document.getElementById("binder").appendChild(new_game);
}

function load_more_games(amount){
    var start = document.getElementById("binder").childElementCount - 1;
    for(var i = start; i < start + amount; i++){
        add_game(i);
        if (i >= games.length - 1){
            document.getElementById("load-more").remove();
            return
        }
    }
    document.getElementById("binder").appendChild(document.getElementById("load-more"));
}

function handleForm(event) {
    event.preventDefault();
    submitter = event.submitter.value;
    if (submitter === "login"){ login(); }
    if (submitter === "register"){ register(); }
}

function login() {
    if (usernameField.value == sessionStorage.getItem('username') && passwordField.value == sessionStorage.getItem('password')){
        sessionStorage.setItem('loggedin', true);
        window.location.assign('account.html');
        return
    }
    logout();
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



load_header_and_footer();
document.getElementById('burger').addEventListener('click', burger_menu);
const usernameField = document.getElementById("username-field");
const passwordField = document.getElementById("password-field");
const eye = document.getElementsByClassName("eye")[0];
const form = document.getElementsByTagName("form")[0];
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
    eye.addEventListener('click', showPassword);
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