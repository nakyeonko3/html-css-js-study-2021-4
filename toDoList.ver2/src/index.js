const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");


function init(){
  toDoForm.addEventListener("submit",handleSubmit);  
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    
}

init();