const loginBtn = document.getElementById("loginBtn");


loginBtn.onclick = () => {


    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;


    if(username && password){

        localStorage.setItem("user", username);


        document.getElementById("loginMessage").innerHTML =
        "✅ Login successful!";


        setTimeout(() => {

            window.location.href = "index.html";

        },1000);


    } else {

        document.getElementById("loginMessage").innerHTML =
        "❌ Enter username and password";

    }


};