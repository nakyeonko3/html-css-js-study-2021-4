const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

    function paintToDo(text) {
      
        
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length + 1;
  
        delBtn.innerHTML = "❌";
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        toDoList.appendChild(li);

        const toDoObj = {
            text: text,
            id: newId
        };
        
        // console.log(li);
        toDos.push(toDoObj);
        saveToDos();
    }
    
   

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null)
    {
       const parsedToDos = JSON.parse(loadedToDos);
    
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
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


// -----처리한 컴파일 오류---
// index.js:19 Uncaught TypeError: Cannot read property 'appendChild' of null
//     at paintToDo (index.js:19)
//     at HTMLFormElement.handleSubmit (index.js:36)
// 원인: toDoList = document.querySelector(".js-toDoList"); 
// ".js-toDoList"리고 적어서 버그터짐. "." 점 하나 적어서 dom객체를 제대로 받지 못했음 


// -----공부 내용 정리---
//localStorage는 stirng 값만 저장이 가능하다. 
//그래서 JSON.stringify를 사용해서 toDos 배열의 데이터를 string값으로 변환함
//JSON은 'JavaScript Object Notation'의 줄인말이다.