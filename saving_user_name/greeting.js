
const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings"),
question = document.querySelector(".js-question");

const USER_LS = "currentUser",
SHOWING_CN = "showing",
QESTION_CN = "question",
CHANGE_CN = "change";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
//   console.log(currentValue);    

    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function changeFont(){
    question.classList.add(CHANGE_CN);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function init() {

    question.addEventListener("click", changeFont)

    if(currentUser == null){
        //he is not
        askForName();
    }
    else{
        //he is there
        paintGreeting(currentUser);
       
    }
}

init();


