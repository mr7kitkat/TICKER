import "./styles/style.css"
import todo from "./scripts/todo";

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").parentElement.classList.toggle("active")
})