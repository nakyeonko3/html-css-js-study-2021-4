const title = document.querySelector(".title");

const BASE_COLOR = "red9";

function handleClick() {
    console.log(title.getElementsByClassName.color);
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();