const btn = document.querySelector("#btn-mobile");
const nav = document.querySelector(".nav-items-mobile")
const icon = document.querySelector(".bi")
const logo = document.querySelector(".logo")

const menu = () => {
    if(icon.classList.contains("bi-list")) {
        nav.style.display = "flex"
        icon.classList.remove("bi-list")
        icon.classList.add("bi-x-lg")
        logo.classList.remove("logo")
    } else {
        icon.classList.add("bi-list")
        icon.classList.remove("bi-x-lg")
        nav.style.display = "none"
        logo.classList.add("logo")
    }
}

btn.addEventListener("click", menu)