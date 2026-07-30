// 🌙 Dark mode button

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

};



// 📁 File preview

const fileInput = document.querySelector(".drop input");

fileInput.addEventListener("change", () => {

    if(fileInput.files.length > 0){

        alert(
            "Selected file: " + fileInput.files[0].name
        );

    }

});



// 🔍 Search

const searchInput = document.querySelector(".search input");

const cards = document.querySelectorAll(".fileCard");


searchInput.addEventListener("input", () => {

    let text = searchInput.value.toLowerCase();


    cards.forEach(card => {


        let content = card.innerText.toLowerCase();


        if(content.includes(text)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }


    });


});



// ❤️ Like buttons

const likeButtons = document.querySelectorAll(".actions button:nth-child(2)");


likeButtons.forEach(button => {


    button.onclick = () => {


        let number = parseInt(
            button.innerText.replace("❤️","")
        );


        number++;


        button.innerText = "❤️ " + number;


    };


});



// ⬇ Download counter

const downloadButtons = document.querySelectorAll(".actions button:first-child");


downloadButtons.forEach(button => {


    button.onclick = () => {


        button.innerText = "⬇ Downloaded";


        setTimeout(()=>{

            button.innerText = "⬇ Download";

        },2000);


    };


});

// 📁 File upload preview demo

const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");
const progressBar = document.getElementById("progressBar");
const uploadMessage = document.getElementById("uploadMessage");


fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];


    if(file){

        let size = (file.size / 1024 / 1024).toFixed(2);


        fileInfo.innerHTML = `
        📄 <b>${file.name}</b><br>
        📦 ${size} MB
        `;

    }

});



const uploadButton = document.querySelector(".uploadBtn");


uploadButton.onclick = () => {


    if(!fileInput.files[0]){

        uploadMessage.innerHTML =
        "❌ Select a file first";

        return;

    }


    let progress = 0;


    let timer = setInterval(()=>{


        progress += 10;


        progressBar.style.width =
        progress + "%";


        if(progress >= 100){


            clearInterval(timer);


            uploadMessage.innerHTML =
            "✅ File uploaded successfully!";


        }


    },200);


};

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const feed = document.querySelector(".feed");


uploadBtn.onclick = () => {

    const file = fileInput.files[0];

    if(!file){
        alert("Please select a file first!");
        return;
    }


    const card = document.createElement("div");

    card.className = "fileCard";


    card.innerHTML = `

    <div class="user">

        <div class="avatar">
        U
        </div>

        <div>
            <h3>
            You
            </h3>

            <p>
            Just now
            </p>
        </div>

    </div>


    <h2>
    📄 ${file.name}
    </h2>


    <p>
    Uploaded file
    </p>


    <div class="details">

        <span>
        📁 File
        </span>

        <span>
        ${(file.size / 1024).toFixed(1)} KB
        </span>

    </div>


    <div class="actions">

        <button>
        ⬇ Download
        </button>

        <button>
        ❤️ 0
        </button>

        <button>
        💬 0
        </button>

    </div>

    `;


    feed.appendChild(card);


    fileInput.value = "";

};