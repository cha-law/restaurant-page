const createContactPage = () => {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us Page";

    contentDiv.appendChild(h1);
};

export default createContactPage;