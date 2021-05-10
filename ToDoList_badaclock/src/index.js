const h1 = document.querySelector("h1"),
h2 = document.querySelector("h2"),
ToDo_form = document.querySelector("form"),
ToDo_input = ToDo_form.querySelector("input"),
btn = document.querySelector("button");




init();

function init() {
    ToDo_form.addEventListener("submit",handleSubmit);
    btn.addEventListener("click",handleClick);
 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = ToDo_input.value;
    
    showHello(currentValue);


}

function handleClick(){
    location.reload();
}

function showHello(currentValue){
    h2.innerHTML = `Hello, ${currentValue}`
    ToDo_form.classList.remove("js-form");
    ToDo_form.classList.add("delete");

    h2.classList.remove("sub-title");
    h2.classList.add("show");

}

//input으로 입력시 form이 없어지고, h2가 나타남.
