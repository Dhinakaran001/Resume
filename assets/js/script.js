var home = document.getElementById('home');
var resume = document.getElementById('resume');
var portfolio = document.getElementById('portfolio');
var contact = document.getElementById('contact');


function openHome(){
    home.style.display = "block";
    resume.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "none";
}
function openResume(){
    home.style.display = "none";
    resume.style.display = "block";
    portfolio.style.display = "none";
    contact.style.display = "none";
    
}
function openPortfolio(){
    home.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "block";
    contact.style.display = "none";
}
function openContact(){
    home.style.display = "none";
    resume.style.display = "none";
    portfolio.style.display = "none";
    contact.style.display = "block";
}



var menuIcon = document.getElementById('navbar');

function openIcon(){
     menuIcon.style.backgroundColor = "white";
}

