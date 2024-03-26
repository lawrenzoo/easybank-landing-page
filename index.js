let harmburger = document.querySelector(".harmburger");
let times = document.querySelector(".times");
let navPage = document.querySelector(".navigation-page");

function handleClick() {
    if (harmburger.style.display !== "none") {
        harmburger.style.display = "none";
        times.style.display = "block";
        navPage.style.left ="10%";
    } else {
        harmburger.style.display = "block";
        times.style.display = "none";
        navPage.style.left ="-250%";
    }
}