var home = document.getElementById("home");
var resume = document.getElementById("resume");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

function openHome() {
  home.style.display = "block";
  resume.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
}
function openResume() {
  home.style.display = "none";
  resume.style.display = "block";
  portfolio.style.display = "none";
  contact.style.display = "none";
}
function openPortfolio() {
  home.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "block";
  contact.style.display = "none";
}
function openContact() {
  home.style.display = "none";
  resume.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "block";
}

var menuIcon = document.getElementById("navbar");

function openIcon() {
  menuIcon.style.backgroundColor = "white";
}

var sidebar = document.getElementById("navbarNav");

document.onclick = function (e) {
  if (e.target.id !== "navbarNav") {
    sidebar.classList.remove("show");
  }
};

var experienceElement = document.getElementById("experience");

// Define the start date
var startDate = new Date("November 21, 2022");

// Get the current date
var currentDate = new Date();

// Calculate the duration in years and months
var years = currentDate.getFullYear() - startDate.getFullYear();
var months = currentDate.getMonth() - startDate.getMonth();

// Adjust years and months if necessary
if (months < 0) {
  years--;
  months += 12;
}

// Construct the formatted string
var formattedExperience = "";
if (years > 0) {
  formattedExperience += years + " yr ";
}
if (months > 0) {
  formattedExperience += months + " mos";
}

// Display the formatted experience
experienceElement.textContent = formattedExperience + " - Currently working";
