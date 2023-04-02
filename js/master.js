
/*

let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

    document.documentElement.style.setProperty(`--main-color`, localStorage.getItem("color-option"));

}

//click on toggle
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}; 

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    //click on
   li.addEventListener("click", (e) => {

   document.documentElement.style.setProperty(`--main-color`, a.target.dataset.color);

   localStorage.setItem("color-option", e.target.dataset.color);

   e.target.parentElement.querySelectorAll(".active").forEach(element => {
    
    element.classList.remove("active");

   });

   e.target.classList.add("active");

  });
});

// select landing pag elment

let landingPage = document.querySelector(".landing");

// get array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpeg", "06.jpg", "07.jpg", "08.jpg"];

setInterval(() => {

    // get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // change bavkground imge url 

    landingPage.style.backgroundImage = `url("img/` + imgsArray[randomNumber] + `")`;

}, 3000);
*/ 