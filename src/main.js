import "./styles/style.css"
import todo from "./scripts/todo";
import toggler from "./scripts/toggler";

// navigation section management
const NAVIGATION = document.querySelector(".navigation");

// hamburger management
const HAMBURGER_MENU = NAVIGATION.querySelector(".hamburger");
HAMBURGER_MENU.addEventListener("click", () => {
    NAVIGATION.classList.toggle("active");
})

// links and page management
const LINKS_CONTAINOR = NAVIGATION.querySelector(".links");
new toggler([...LINKS_CONTAINOR.children], "active");