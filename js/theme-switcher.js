const dayNight = document.querySelector(".theme-row");
const themeIcon =dayNight.querySelector("#theme-icon");

window.addEventListener("load",()=>{
    
    themeIcon.classList.add("fa-sun");
    console.log(themeIcon);
    // if(document.body.classList.contains("dark")){
    //     themeIcon.classList.replace("fa-moon","fa-sun")

    // }
});
// dayNight.addEventListener("click",()=>{
//      if(document.body.classList.contains("dark")){
//         themeIcon.classList.replace("fa-moon","fa-sun");
//         body.classList.add("dark");
//     }
//     else{
//         themeIcon.classList.add("fa-moon");
//         body.classList.remove("dark");
//     }
// })
dayNight.addEventListener("click",()=>{
    if(themeIcon.classList.contains("fa-moon")){
        themeIcon.classList.replace("fa-moon","fa-sun");
        document.body.classList.add("dark");
        console.log(themeIcon);
        // console.log(body.classList);
    }
    if (themeIcon.classList.contains("fa-sun")){
        themeIcon.classList.replace("fa-sun","fa-moon");
        document.body.classList.remove("dark");
        console.log(themeIcon);
    }
})

// document.body.classList.add("dark");

// window.addEventListener("load",()=>{
// //    themeIcon.classList.add("fa-moon");
// console.log(themeIcon);
// });
// dayNight.addEventListener("click",()=>{
//     if(document.body.classList.contains("dark")){
//    themeIcon.classList.remove("fa-moon");
//    themeIcon.classList.add("fa-sun");
//   console.log(themeIcon);
//     }
//     else{
//         document.body.classList.add("dark");
//         themeIcon.classList.remove("fa-moon");
        
//         console.log(themeIcon);
//     }

    
// })


// background theme switcher
// <i class="fas fa-sun" ></i>
// <i class="fas fa-moon theme-icon"></i>
// light and dark mode






