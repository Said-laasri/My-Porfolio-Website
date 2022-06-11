let menu = document.querySelector("#side-bar");
let menubar= document.querySelector(".portfolio");
let closemenu=document.querySelector(".menu-close");
menu.addEventListener('click',function(){
    menubar.classList.toggle("nemubar");
    menu.style.visibility="hidden";
    closemenu.style.visibility="visible";
}
)
closemenu.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility="visible";
    closemenu.style.visibility="hidden";
})