const h1 = document.querySelector("h1"),
form = document.querySelector("form"),
input = form.querySelector("input"),
btn = document.querySelector("button");
list = document.querySelector("ul");

const LIST_LS = "list_ls";

let list_all = [];
let list_id = 0;

//  loadList();
 console.log(list_all);
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
    console.log("wrong?");
    localStorage.setItem(LIST_LS, JSON.stringify(list_all));
    // const list_all_sample = localStorage.getItem(LIST_LS);
    // const sample = JSON.parse(list_all_sample);
    // console.log(`${typeof(sample)}`);
    // console.log(sample.length);
  
    
}

function loadList(){
    const list_all_sample = localStorage.getItem(LIST_LS);
    const sample = JSON.parse(list_all_sample);
    console.log(sample);
    list_all = sample;
    // if(list_all.length > 0)
    // {
    //     printloadlist();
    // }
    // list_id = sample.length
}

function printloadlist() {
    console.log(list_all[0].id,list_all[0].text, list_all.length);
   
        printListValue(list_all[0].text);
        push_list_all(list_all[0].text);

  
    saveList();
}

// printListVlaue에서 버그 났음. innerText와 value의 차이를 알지 못함. 공부필요. 
// creatElement는 html의 요소를 추가하는게 아니라 테그를 추가하는 것임