document.addEventListener("DOMContentLoaded", function(){

    const iframe = document.querySelector("iframe");
    const menuLinks = document.querySelectorAll(".submenu a");
    const mainMenus = document.querySelectorAll(".menu > li > a");

    // Active menu
    menuLinks.forEach(link=>{
        link.addEventListener("click", function(){

            mainMenus.forEach(m=>m.classList.remove("active"));

            const parentMenu = this.closest("li")
                .parentElement
                .parentElement
                .querySelector("a");

            parentMenu.classList.add("active");
        });
    });
 });
window.addEventListener("message", function(e){
    document.querySelector("iframe").style.height = e.data + "px";
});