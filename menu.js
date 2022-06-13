const menu = document.querySelector("#side-bar");
const menubar = document.querySelector(".portfolio");
const closemenu = document.querySelector(".menu-close");
const worksection = document.querySelector("#jumptopagework ");
const aboutsection = document.querySelector("#jumptopageabout");
const contactsection = document.querySelector("#jumptopagecontact");

menu.addEventListener('click',function(){
    menubar.classList.toggle("nemubar");
    menu.style.visibility = "hidden";
    closemenu.style.visibility = "visible";
}
);

closemenu.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility = "visible";
    closemenu.style.visibility = "hidden";
}
);

worksection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility = "visible";
    closemenu.style.visibility = "hidden";
}
);

aboutsection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility = "visible";
    closemenu.style.visibility = "hidden";
}
);

contactsection.addEventListener('click',function(){
    menubar.classList.remove("nemubar");
    menu.style.visibility = "visible";
    closemenu.style.visibility = "hidden";
}
);
