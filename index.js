const dropdown = document.querySelector("nav");
const hamburgerButton = document.querySelector(".ham")



const clickDropdown = hamburgerButton.addEventListener("click",(e) => {

    if (hamburgerButton.getAttribute("src") == "./images/more.png") {
        hamburgerButton.setAttribute("src", "./images/cancel.png")
        dropdown.classList.add("view")  
    }

    else {
        hamburgerButton.setAttribute("src", "./images/more.png")
        dropdown.classList.remove("view");
    }
    // hamburgerButton.setAttribute("src", "./images/cancel.png")
});

