const createHomePage = () => {
    const contentDiv = document.querySelector("#content");

    const heroDiv = document.createElement("div");
    heroDiv.classList.toggle("hero-wrapper");

    const welcomeTitle = document.createElement("h1");
    welcomeTitle.textContent = "Welcome to Hotel Breakfast";

    const sloganText = document.createElement("p");
    sloganText.textContent = "Start your day with greatness";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.toggle("hero-buttons");

    const bookButton = document.createElement("button");
    bookButton.textContent = "Book a table";

    const locationsButton = document.createElement("button");
    locationsButton.textContent = "Our locations";

    contentDiv.appendChild(heroDiv);
    heroDiv.appendChild(welcomeTitle);
    heroDiv.appendChild(sloganText);
    heroDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(bookButton);
    buttonsDiv.appendChild(locationsButton);
};

export default createHomePage;