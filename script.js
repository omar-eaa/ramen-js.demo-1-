// Create sidebar container element
const sidebarContainer = document.createElement("div");
sidebarContainer.classList.add("sidebar-container-js");

// Create heading element
const heading = document.createElement("h3");
heading.textContent = "DIN KASSE INDEHOLDER";
sidebarContainer.appendChild(heading);

// Create image container
const imgP = document.createElement("div");
imgP.classList.add("img-p");
sidebarContainer.appendChild(imgP);

// Create image element
const img = document.createElement("img");
img.src = "./img/FP-Quick-30-minutes-chicken-ramen.jpeg";
img.alt = "Ramen";
imgP.appendChild(img);

// Create paragraph element
const paragraph = document.createElement("p");
paragraph.textContent = "Ramen";
imgP.appendChild(paragraph);

// Create button container
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("red-btn--green-btn");
sidebarContainer.appendChild(buttonContainer);

// Create red button
const redButton = document.createElement("button");
redButton.classList.add("red-btn");
redButton.textContent = "ANULLER";
buttonContainer.appendChild(redButton);

// Create green button
const greenButton = document.createElement("button");
greenButton.classList.add("green-btn");
greenButton.textContent = "BEKRÆFT";
buttonContainer.appendChild(greenButton);

// Append sidebar container to the body or any other desired parent element
document.body.appendChild(sidebarContainer);
