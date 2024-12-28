let submitBtn = document.getElementById("submit");
let mailInput = document.getElementById("mailinput");
let errorMessage = document.getElementById("error");
let errorIcon = document.getElementById("icon-error");
let sectionForm = document.querySelector(".section__form");

submitBtn.addEventListener("click", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = mailInput.value.trim();

    if (emailValue === "") {
        errorMessage.style.display = "block";
        errorIcon.classList.add("show");
        sectionForm.classList.add("error");
    } else if (!emailRegex.test(mailInput.value)) {
        errorMessage.style.display = "block";
        errorIcon.classList.add("show");
    }    
    else {
        errorMessage.style.display = "none";
        errorIcon.classList.remove("show");
        sectionForm.classList.remove("error");
    }
});