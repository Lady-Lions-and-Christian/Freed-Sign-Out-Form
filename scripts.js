const formSubmission = document.querySelector("form");

formSubmission.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formSubmission);
    const objectFormData = Object.fromEntries(formData);

    const jsonFormData = JSON.stringify(objectFormData);
    localStorage.setItem('form', jsonFormData);

    window.location.href = "confirmationpage.html";

    formSubmission.reset();

})

/*Traveling With Functionality*/
const optionalBlank = document.querySelector("#travel-select-optional");
const choiceSelect = document.querySelector("#travel-select")

// When alone is selected, make optional blank disappear.
// When alone isn't selected, make optional blank reappear.

//Functions
function optionalBlankDisplay() {
}
