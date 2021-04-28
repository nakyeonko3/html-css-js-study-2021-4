
const country = document.querySelector(".choose-conutry"),
korea = country.querySelector(" option[name=Korea]");

const question = document.querySelector(".js-question");


const QESTION_CN = "question",
CHANGE_CN = "change_",
COUNTRY = "";


function saveName(text){
    localStorage.setItem(COUNTRY, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = event.target.value;  

    saveName(currentValue);
}



function changeFont(){
    question.classList.add(CHANGE_CN);
}



function init() {
    country.addEventListener('change', handleSubmit);

    changeFont();
    
}

init();

