const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    const nav = document.querySelector("#navbar-responsive");
    navToggle.classList.toggle("open")
    nav.classList.toggle("active");
});