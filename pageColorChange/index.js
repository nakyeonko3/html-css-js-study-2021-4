
console.log("it s working! GAME START");

const body = document.querySelector("body");
const heading = document.querySelector(".title");
let intFrameWidth = window.innerWidth;
let fontFaceSet = document.fonts;


body.style.backgroundColor = "#F0C79B";
heading.innerHTML = "sky?";
window.addEventListener("resize",window_resize);

console.log(heading.style.fontSize);



function window_resize() {
 
    // This will return the width of the viewport
 intFrameWidth = window.innerWidth;
    
 change_backgroundColor();
 fontFaceSet = document.fonts
 console.log(fontFaceSet);
//  console.log("--------------------------------------------------------------");
//  console.log("window.innerWidth :"+intFrameWidth);

}

function change_backgroundColor(){
    if( intFrameWidth<650 )
    {   
        body.style.backgroundColor = "#FA3C0C";
        heading.innerHTML = "dawn sky";
        
    }
    else if(intFrameWidth>651 && intFrameWidth<1200) {
         body.style.backgroundColor = "#15AAEC";
         heading.innerHTML = "blue sky";
         
    }
    else if (intFrameWidth > 1201)
    {
        body.style.backgroundColor = "#324354";
        heading.innerHTML = "night sky";
        
    }
    else{
        body.style.backgroundColor = "green";
        heading.innerHTML = "error";
        

    }

}

// 이거 만들면서 생겼던 버그 목록
// 1) innerHTML null : querySelector 오류
// 2) 폰트 사이즈 오류 : 자바스크립트에서 dom객체로 h1의 텍스트를 변경하니까 텍스크 크기가 바꼈음. js 상에는 오류 없는데 css 폰트 오류였음
// 3) window.addEventListener : addEventListener는 특정 이벤트가 발생할 때마다 함수를 호출한다, DOM 인터페이스 -- > 요걸 안 쓰고 웹페이지를 제작할려고 했음