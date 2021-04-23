const number = prompt("홀수 판별기 입니다. 숫자를 입력하세요");



function isOdd(number) {
// return number % 2 == 1;
return number & 1 == 1;
};


if (isOdd(number)) {
    alert("홀수입니다.");
}
else
{
    alert("짝수입니다.");
}