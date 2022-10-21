// background theme switcher
// <i class="fas fa-sun" ></i>
// <i class="fas fa-moon theme-icon"></i>
// light and dark mode



const dayNight = document.querySelector(".theme-row");
const themeIcon =dayNight.querySelector("i");

dayNight.addEventListener("click",()=>{
    themeIcon.classList.toggle("fa-sun");
    themeIcon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    console.log("Hello world") 
    if(document.body.classList.contains("dark")){
   
          themeIcon.classList.add("fa-sun");
          console.log(themeIcon);
    }
    else{
        themeIcon.classList.add("fa-moon");
        console.log(themeIcon);
    }


})