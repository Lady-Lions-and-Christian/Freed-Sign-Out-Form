const formSubmission = document.querySelector("form");

formSubmission.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formSubmission);
    const objectFormData = Object.fromEntries(formData);

    const jsonFormData = JSON.stringify(objectFormData);
    localStorage.setItem('form', jsonFormData);

    //window.location.href = "confirmationpage.html";
    authenticate(objectFormData);

    formSubmission.reset();

})

function authenticate(formData) {
    const enteredUsername = formData.username;
    const enteredPassword = formData.password;
    const message = document.getElementById("message");
  
    // Read the JSON file with user data
    fetch("signout.json")
      .then(response => response.json())
      .then(data => {
        const users = data;
        const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);
  
        if (user) {
          // Authentication successful
          message.textContent = "Login successful!";
          // Redirect to another page or perform other actions here
        } else {
          // Authentication failed
          message.textContent = "Invalid username or password. Please try again.";
        }
      })
      .catch(error => {
        console.error("Error reading JSON file: " + error);
        message.textContent = "An error occurred while processing your request.";
      });
}

/*Traveling With Functionality*/
const optionalBlank = document.querySelector("#travel-select-optional");
const choiceSelect = document.querySelector("#travel-select")

// When alone is selected, make optional blank disappear.
// When alone isn't selected, make optional blank reappear.

//Functions
function optionalBlankDisplay() {
}
