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

const fileInput = document.getElementById("fileInput");

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

// 📤 Upload Demo

const uploadBtn = document.querySelector(".uploadBtn");
const feed = document.querySelector(".feed");

uploadBtn.addEventListener("click", () => {

    if (!fileInput.files.length) {
        alert("Please select a file first.");
        return;
    }

    const file = fileInput.files[0];

    const size = (file.size / 1024 / 1024).toFixed(2);

    const card = document.createElement("div");

    card.className = "fileCard";

    card.innerHTML = `
        <div class="user">
            <div class="avatar">A</div>

            <div>
                <h3>Anonymous</h3>
                <p>Just now</p>
            </div>
        </div>

        <h2>📄 ${file.name}</h2>

        <p>Shared with everyone.</p>

        <div class="details">
            <span>📦 ${size} MB</span>
        </div>

        <div class="actions">
            <button>⬇ Download</button>
            <button>❤️ 0</button>
            <button>💬 0</button>
        </div>
    `;

    feed.prepend(card);

    alert("✅ Upload demo complete!");

});