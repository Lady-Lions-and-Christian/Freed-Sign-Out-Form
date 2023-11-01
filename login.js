//JSON_URL = "./username_password.json"

const users = [
    {
        "username": "christian",
        "password": "123"
    },
    {
        "username": "kaylee",
        "password": "123"
    },
    {
        "username": "priscilla",
        "password": "123"
    },
    {
        "username": "avery",
        "password": "123"
    },
    {
        "username": "abbie",
        "password": "123"
    }
]


function login(){
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;

    // let response = await fetch(JSON_URL);
    // let users = await response.json();
    
    for(let i = 0; i < users.length ; i++){
        if(u === users[i].username && p === users[i].password){
            window.location.replace("formpage.html");
            return;
        }
    }
    alert("Username or Password Incorrect!");
}

