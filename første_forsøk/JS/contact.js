const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const menu = document.querySelector(".menu");                       
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

const fullName = document.querySelector("input#name");
const subject = document.querySelector("input#subject");
const email = document.querySelector("input#email");
const adress = document.querySelector("input#adress");


const nameMessage = document.querySelector("#nameMessage");
const subjectMessage = document.querySelector("#subjectMessage");
const emailMessage = document.querySelector("#emailMessage");
const adressMessage = document.querySelector("#adressMessage");


function validateForm(e) {
  e.preventDefault();

      let subName = fullName.value.trim();
      nameMessage.innerHTML = "";
      if (subName.length == 0) {
        nameMessage.innerHTML = "Requried";
      }
    
      let subSubject = subject.value.trim();
      subjectMessage.innerHTML = "";
      if (subSubject.length < 10) {
        subjectMessage.innerHTML = "Subject must be at least 10 charecters long";
      }

      let subEmail = email.value.trim();
      emailMessage.innerHTML = "";
      let emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (!emailPattern.test(subEmail)) {
        emailMessage.innerHTML = "Please enter a valid email";
      }

      let subAdress = adress.value.trim();
      adressMessage.innerHTML = "";
      if (subAdress.length < 25) {
        adressMessage.innerHTML = "Please tell us a bit more. At least 25 characters";
      }
}