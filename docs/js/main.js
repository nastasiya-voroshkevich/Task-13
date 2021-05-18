const navbarNav = document.querySelector(".navbar-nav");
const notes = document.getElementById("notes");
const loginButton = document.getElementById("login-button");
const addNote = document.getElementById("add-note");
const noteText = document.getElementById("note-text");
const alertPrimary = document.querySelector(".alert-primary");
const jumbotron = document.querySelector(".jumbotron");
const container = document.querySelector(".container");
const inputEmail = document.getElementById("inputEmail");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const notesContainer = document.getElementById("notes-container");
const all = document.getElementById("all");
notes.hidden = true;
navbarNav.hidden = true;
alertPrimary.hidden = true;
login.hidden = false;
let currentUser = inputEmail.value;
inputEmail.value = localStorage.getItem("currentUser");
console.log(localStorage.getItem("currentUser"));
logout.addEventListener("click", () => (location.hash = "#login"));
loginButton.addEventListener("click", () => (location.hash = "#notes"));
all.addEventListener("click", () => (location.hash = "#all"));
const changeLocation1 = () => {
  navbarNav.hidden = true;
  notes.hidden = true;
  alertPrimary.hidden = true;
  login.hidden = false;
  location.reload();
  localStorage.removeItem("currentUser");
  inputEmail.value = "";
};
const changeLocation = () => {
  if (inputEmail.value) {
    notes.hidden = false;
    navbarNav.hidden = false;
    login.hidden = true;
    alertPrimary.hidden = false;
    array = JSON.parse(
      localStorage.getItem(localStorage.getItem("currentUser"))
    );
    if (array !== null && inputEmail.value == localStorage.getItem("currentUser")) {
        notesContainer.insertAdjacentHTML("afterbegin", array);
    }
  
  }
};

const changeLocation2 = () => {
  alertPrimary.hidden = false;
  
   if (noteText.value) {
    const taskText = noteText.value;
    const taskHTML = ` <div class="alert alert-primary" role="alert">
    <span>${taskText}</span> 
     </div>`;

    notesContainer.insertAdjacentHTML("afterbegin", taskHTML);

    localStorage.setItem(
      localStorage.getItem("currentUser"),
      JSON.stringify(notesContainer.innerHTML)
    );
    noteText.value = "";
  }
 
};
const changeLocation3 = () => {
 notes.hidden = false;
  navbarNav.hidden = false;
  alertPrimary.hidden = true;
  container.hidden = true;
 notesContainer.hidden = true;
notes.insertAdjacentHTML("afterbegin", '<strong>Этот раздел находится в  разработке.</strong>');

};

logout.addEventListener("click", changeLocation1);

loginButton.addEventListener("click", changeLocation);
inputEmail.onblur = function () {
  localStorage.setItem("currentUser", inputEmail.value);
};

addNote.addEventListener("click", changeLocation2);
all.addEventListener("click", changeLocation3);

changeLocation();
