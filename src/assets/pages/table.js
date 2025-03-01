const createTablePage = () => {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Book A Table Page";

    contentDiv.appendChild(h1);
};

export default createTablePage;