//JSON_URL = "./username_password.json"

const users = [
    {
        "username": "christian",
        "password": "1111"
    },
    {
        "username": "kaylee",
        "password": "2222"
    },
    {
        "username": "priscilla",
        "password": "3333"
    },
    {
        "username": "avery",
        "password": "4444"
    },
    {
        "username": "abbie",
        "password": "5555"
    }
]


function login(){
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const message = document.getElementById("message");

    // let response = await fetch(JSON_URL);
    // let users = await response.json();
    
    for(let i = 0; i < users.length ; i++){
        if(u === users[i].username && p === users[i].password){
            window.location.replace("formpage.html");
            return;
        }
    }
    message.textContent = "Invalid username or password. Please try again.";
}