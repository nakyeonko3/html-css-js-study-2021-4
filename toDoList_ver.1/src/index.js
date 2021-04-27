const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = "❌";
        const span = document.createElement("span");
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        
        console.log(li);
        toDoList.appendChild(li);
    }
     



function loadToDo(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null)
    {
       
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


// 처리 한 버그 목록
// index.js:19 Uncaught TypeError: Cannot read property 'appendChild' of null
//     at paintToDo (index.js:19)
//     at HTMLFormElement.handleSubmit (index.js:36)
// 원인: toDoList = document.querySelector(".js-toDoList"); 에 ".js-toDoList"에 점 하나 안 적어서 dom객체를 제대로 받지 못했음 