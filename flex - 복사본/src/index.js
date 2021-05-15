const h1 = document.querySelector("h1"),
form = document.querySelector("form"),
input = form.querySelector("input"),
btn = document.querySelector("button");
list = document.querySelector("ul");

const LIST_LS = "list_ls";

let list_all = [];
let list_id = 0;

console.log("typeof(list_all): ",typeof(list_all));
console.log("list_all: ", list_all);

getLocalStorage();




form.addEventListener("submit",handleSubmit);


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    input.value ="";
    // console.log(`submit: ${input.value}`);
    printListValue(currentValue);
    push_list_all(currentValue);
    saveList();
}

function printListValue(text) {
    const span = document.createElement("span");
    const btn  = document.createElement("button");
    const li = document.createElement("li");
    span.innerText = text;
    btn.innerText = "❌";
    li.id = list_id++;
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
}

function push_list_all(text) {
    const id = list_id;
    let list_value = {
        id :list_id,
        text : text
    }
    list_all.push(list_value);
    
}

function saveList(){
    localStorage.setItem(LIST_LS, JSON.stringify(list_all));

    
    
}



function getLocalStorage() {
    let getList_all = [];
    getList_all = JSON.parse(localStorage.getItem(LIST_LS));
    console.log("typeof(getList_all): ",typeof(getList_all) );
    console.log("getList_all: ",getList_all);

  

    
    if(getList_all !== null)
    {
        list_all = getList_all;
        console.log("typeof(list_all): ",typeof(list_all) );
        console.log("list_all: ",list_all);
        list_all.forEach(element => {
            printListValue(element.text)
        });
    }




}



/* 
printListVlaue에서 버그 났음. innerText와 value의 차이를 알지 못함. 공부필요. 
creatElement는 html의 요소를 추가하는게 아니라 테그를 추가하는 것임


object나 array에 아무것도 없으면 아예 null 자료형이됨 이 null자료형은 어레이 취급을 못 받는다.
!==
 */

/* 
버그1
: 오브젝트가 null이 되어서 null자료형으로 아에 변해버림, 어레이로는 절대 못쓰이는 건가?

버그2
: !==이거 기호를 모르고 있었음 */