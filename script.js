let submitBtn = document.getElementById("submit");
let mailInput = document.getElementById("mailinput");
let errorMessage = document.getElementById("error");
let errorIcon = document.getElementById("icon-error");

submitBtn.addEventListener("click", () => {
    if (mailInput.value !== null) {
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        errorIcon.style.display = "none";
    }
});