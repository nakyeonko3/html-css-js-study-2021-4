const ToDo_form = document.querySelector(".js-ToDo-Form"),
ToDo_form_input = ToDo_form.querySelector("input"),
ToDo_list = document.querySelector(".js-ToDo-List");

ToDo_form_input.placeholder = "랜덤 디펜스 게임 제작하기";

for(let i =0 ;i<5 ;i++) {
    const span = document.createElement("span");
const delbtn = document.createElement("button");
const li = document.createElement("li");
const id = 1;

span.innerText = "3시간 이상 공부하기";
delbtn.innerText = "❌";

li.appendChild(span);
li.appendChild(delbtn);

ToDo_list.appendChild(li);
}


