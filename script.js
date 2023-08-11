//coder by muerdoga

const input_text = document.querySelector("#input-text");
const button_find = document.querySelector("#button-find");
const button_clear = document.querySelector("#button-clear");
const image_list = document.querySelector(".image-list");

function runEventListener() {
    button_find.addEventListener("click", search);
    button_clear.addEventListener("click", clear);
}

function search(event) {
    image_list.innerHTML = "";
    const value = input_text.value.trim();
    let new_data;
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization : "Client-ID Zhy7-HIs46m_HQDvB1memkojuE-WNZYr08BAUr86mSE"
        }   
    })
    .then(res => res.json())
    .then((data) => {
        for (const image of data.results) {
            addImages(image);
        }
    })
    .catch(err => console.log(err))
    event.preventDefault();
}

function clear(event) {
    image_list.innerHTML = "";
    input_text.value = "";
    event.preventDefault();
}

function addImages(image){
    let new_image = document.createElement("img");
    new_image.src = image.urls.small;
    new_image.className = "image";
    new_image.style.backgroundColor = "red";
    new_image.style.maxWidth = "30%";
    image_list.appendChild(new_image);
}

runEventListener();
