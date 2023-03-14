// Data för alla mina spel
var games = [
    {id: "0", name: "8 Ball Pool", engine: "Scratch", date: new Date(2022, 08, 31), elapsed: "just now", link: "https://scratch.mit.edu/projects/353994505/"},
    {id: "1", name: "Tunnel Runner 3D", engine: "Scratch", date: new Date(2021, 07, 20), elapsed: "just now", link: "https://scratch.mit.edu/projects/553825577/"},
    {id: "2", name: "Miner Cat 4", engine: "Scratch", date: new Date(2022, 01, 25), elapsed: "just now", link: "https://scratch.mit.edu/projects/487580583/"},
    {id: "3", name: "Candy Clicker 2", engine: "Scratch", date: new Date(2022, 07, 21), elapsed: "just now", link: "https://scratch.mit.edu/projects/332026728/"},
    {id: "4", name: "Super Auto Scratch", engine: "Scratch", date: new Date(2022, 03, 21), elapsed: "just now", link: "https://scratch.mit.edu/projects/663115790/"},
    {id: "5", name: "Tap-Tap Shots", engine: "Scratch", date: new Date(2020, 03, 09), elapsed: "just now", link: "https://scratch.mit.edu/projects/373884927/"},
    {id: "6", name: "Flying Gorilla", engine: "Scratch", date: new Date(2022, 04, 01), elapsed: "just now", link: "https://scratch.mit.edu/projects/661914879/"},
    {id: "7", name: "Brawl.io", engine: "Scratch", date: new Date(2021, 08, 03), elapsed: "just now", link: "https://scratch.mit.edu/projects/556451127/"}
]

function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
        { label: 'year',   seconds: 31536000 },
        { label: 'month',  seconds: 2592000 },
        { label: 'week',   seconds: 604800 },
        { label: 'day',    seconds: 86400 },
        { label: 'hour',   seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return count + ' ' + interval.label + (count > 1 ? 's' : '') + ' ago';
        }
    }
    
    return 'just now';
}  

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
    '<h1><a href="index.html"><img src="img/icons/logo.png" alt="Binus Spelus"></a></h1>' +
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
    document.getElementById('burger').addEventListener('click', burger_menu);
}

// Här är alla funktioner som ändrar sidan när den startar (ändrar spel texter, ändrar användarnamns texter osv)
function load_site(name){
    if (name === "index"){
        load_more_games(8);
        games.sort(function(a, b) { return b.date - a.date; });
        //form.addEventListener('submit', handleSearch);
    }
    if (name === "game"){
        document.getElementById("game").src = "games/" + game_id + "/index.html";
        document.getElementById("game_info_name").innerHTML = games[game_id].name;
        document.getElementById("game_info_engine").innerHTML = "Made in " + games[game_id].engine;
    }
    if (name === "login" || name === "register"){
        form.addEventListener('submit', handleForm);
        eye.addEventListener('click', showPassword);
    }
    if (name === "account"){
        document.getElementById("account-name").innerHTML = sessionStorage.getItem('username');
    }
    // visar din profil bild och byter länk till account sidan om du är inloggad
    if (sessionStorage.getItem('loggedin') == "true"){
        document.getElementById("nav-links-login").children[0].src = "img/profile/pfp.avif";
        document.getElementById("nav-links-login").href = "account.html";
    }
}

function burger_menu(){
    document.getElementById('burger').classList.toggle('burger-toggle');
    document.getElementById('nav-links').classList.toggle('nav-active');
}

function add_game(game_id){
    const game = games[game_id]
    game.elapsed = timeSince(game.date);
    var new_game = Object.assign(document.createElement('a'), {href:`game.html?${game.id}`, classList:"game"});
    new_game.appendChild(Object.assign(document.createElement('img'), {src:`img/thumbnails/${game.id}.png`, alt:game.name}));
    new_game.appendChild(Object.assign(document.createElement('h2'), {innerHTML:game.name}));
    new_game.appendChild(Object.assign(document.createElement('p'), {innerHTML:game.elapsed}));

    document.getElementById("binder").appendChild(new_game);
    games.sort(function(a, b) { return b.date - a.date; });
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
function showPassword() {
    if (passwordField.type == "password") {
        passwordField.type = "text";
        eye.src = "img/icons/hide.svg";
    } else {
        passwordField.type = "password";
        eye.src = "img/icons/view.svg";
    }
}


const usernameField = document.getElementById("username-field")
const passwordField = document.getElementById("password-field")
const eye = document.getElementsByClassName("eye")[0]
const form = document.getElementsByTagName("form")[0]
const site_name = window.location.pathname.split("/").pop().split(".")[0]
const game_id = location.search.substring(1)
load_header_and_footer()
load_site(site_name)