/*==========================================================
    BALANCED LIFE
    APP.JS
==========================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const siteContent = document.getElementById("site-content");
    const progress = document.querySelector(".loader-progress");

    let percent = 0;

    const timer = setInterval(() => {

        percent++;

        progress.style.width = percent + "%";

        if (percent >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                preloader.classList.add("hide");

                siteContent.classList.add("show");

                setTimeout(() => {

                    preloader.remove();

                }, 800);

            }, 250);

        }

    }, 25);

});