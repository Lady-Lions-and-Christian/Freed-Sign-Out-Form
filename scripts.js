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
