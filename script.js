// 🌙 Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

};




// 📁 File Preview

const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");


fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];


    if(file){

        fileInfo.innerHTML = `
        📄 <b>${file.name}</b><br>
        📦 ${(file.size / 1024).toFixed(1)} KB
        `;

    }

});





// 📤 Upload To Feed

const uploadBtn = document.getElementById("uploadBtn");
const feed = document.querySelector(".feed");
const captionInput = document.querySelector(".caption");


uploadBtn.onclick = () => {


    const file = fileInput.files[0];


    if(!file){

        alert("Please select a file first!");

        return;

    }



    const caption = captionInput.value || "No description";



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
    ${caption}
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



    // Clear inputs

    fileInput.value = "";

    captionInput.value = "";

    fileInfo.innerHTML = "";

};






// ⏳ Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});






// 📱 PWA Service Worker

if("serviceWorker" in navigator){

    navigator.serviceWorker.register("service-worker.js")

    .then(() => {

        console.log("PWA Ready ✅");

    })

    .catch(error => {

        console.log("PWA Error:", error);

    });

}