const allcards = document.querySelectorAll(".project-card");

const allFilterLinks = document.querySelectorAll(".filter-link");

allFilterLinks.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        showFilterlinkContent(btn);
    });
});
function showFilterlinkContent(btn){
    allcards.forEach((item)=>{
        if(item.classList.contains(btn.id)){
            resetActiveLink();
            btn.classList.add("active");
            item.style.display="flex"
        }
        else{
            item.style.display="none"
        }

    });

}
function resetActiveLink(){
allFilterLinks.forEach((btn)=>{
    btn.classList.remove("active");
})
}