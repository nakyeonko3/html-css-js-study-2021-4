

// const title = document.getElementById("title");

// title.innerHTML = "Wow it's WORKING!";
// title.style.color = "red"
// document.title="back space ?";
// console.dir(title);


let title = document.querySelector("#title");

function handleclick() {
    title.style.color= "red";
}

title.addEventListener("click", handleclick);