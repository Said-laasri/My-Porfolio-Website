let menu = document.querySelector("#side-bar");
let menubar= document.querySelector(".portfolio");
let closemenu=document.querySelector(".menu-close");
let worksection=document.querySelector("#jumptopagework ");
let aboutsection=document.querySelector("#jumptopageabout");
let contactsection=document.querySelector("#jumptopagecontact");

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
}
)
worksection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility="visible";
    closemenu.style.visibility="hidden";
}
)
aboutsection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility="visible";
    closemenu.style.visibility="hidden";
}
)
contactsection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility="visible";
    closemenu.style.visibility="hidden";
}
)
