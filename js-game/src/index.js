const h1 = document.querySelector("h1"),
form = document.querySelector("form"),
input = form.querySelector("input"),
h2 = document.querySelector("h2");

h1.innerText = "HELLO WORLD";

init()

function init() {
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event){
    console.log("handleSubmit");
    event.preventDefault();
    //addEventListener의 preventDefault가 작동하지 않음

    const currentValue = input.value;
    const text = `안녕 ${currentValue} 오늘 해야 할일을 다하고 자도록 하자`;

    h2.innerText = text;
    
    console.log(`text :${text}`);

    form.classList.remove("show");
    form.classList.add("delete");

    h2.classList.remove("delete");
    h2.classList.add("show");

}