import "./styles.css";
import homePage from "./assets/pages/home.js";
import menuPage from "./assets/pages/menu.js";
import tablePage from "./assets/pages/table.js";
import contactPage from "./assets/pages/contact.js";

let activePage = "home";

// Remove all contents from the content div

function removeContent() {
    const divContents = document.querySelectorAll("#content > *");

    divContents.forEach((element) => {
        element.remove();
    })
};

// Add event listeners for each nav button

const homeButton = document.querySelector("#nav-home");

homeButton.addEventListener(("click"), () => {
    // Ensure the page isn't reloaded
    if (activePage === "home") return;

    // Add the contents of homepage
    removeContent();
    homePage();
    activePage = "home";
});


const menuButton = document.querySelector("#nav-menu");

menuButton.addEventListener(("click"), () => {
    // Ensure the page isn't reloaded
    if (activePage === "menu") return;

    // Add the contents of menupage
    removeContent();
    menuPage();
    activePage = "menu";
});


const tableButton = document.querySelector("#nav-table");

tableButton.addEventListener(("click"), () => {
    // Ensure the page isn't reloaded
    if (activePage === "table") return;

    // Add the contents of menupage
    removeContent();
    tablePage();
    activePage = "table";
});


const contactButton = document.querySelector("#nav-contact");

contactButton.addEventListener(("click"), () => {
    // Ensure the page isn't reloaded
    if (activePage === "contact") return;

    // Add the contents of menupage
    removeContent();
    contactPage();
    activePage = "contact";
});

// Initialize by creating the home page
homePage();
