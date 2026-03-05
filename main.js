document.addEventListener("DOMContentLoaded", function () {

    const menuLinks = document.querySelectorAll(".submenu a");
    const mainMenus = document.querySelectorAll(".menu > li > a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {

            // Remove active tất cả menu chính
            mainMenus.forEach(m => m.classList.remove("active"));

            // Tìm thằng li cha thuộc .menu
            const parentLi = this.closest(".menu > li");

            if (parentLi) {
                const parentMenu = parentLi.querySelector("a");
                if (parentMenu) {
                    parentMenu.classList.add("active");
                }
            }
        });
    });

});

window.addEventListener("message", function (e) {

    const iframe = document.querySelector("iframe");
    if (!iframe) return;

    // Kiểm tra data là số
    const height = parseInt(e.data);

    if (!isNaN(height)) {
        iframe.style.height = (height + 10) + "px"; // cộng thêm 5px cho an toàn
    }

});