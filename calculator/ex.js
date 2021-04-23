const calculator = {
    plus : function(a, b) {
        return a+b;
    },
    minus : function(a, b) {
        return a-b;
    },

    divide : function(a, b) {
        return a/b;
    },
    multiple : function(a, b) {
        return a*b;
    },

    power : function(a, b) {
        return a**b;
    },

    remainder : function(a, b) {
        return a % b;
    },

    and_ : function(a, b) {
        return a & b;
    }

}

const num1 = 4;
const num2 = 2;

const plus = calculator.plus(num1,num2);
const minus = calculator.minus(num1,num2);
const divide = calculator.divide(num1,num2);
const multiple = calculator.multiple(num1,num2);
const power = calculator.power(num1,num2);
const remainder = calculator.remainder(num1,num2);
const and_ = calculator.and_(num1,num2);

console.log(`${num1} + ${num2} = ${plus}`);
console.log(`${num1} / ${num2} = ${divide}`);
console.log(`${num1} - ${num2} = ${minus}`);
console.log(`${num1} * ${num2} = ${multiple}`);
console.log(`${num1} ** ${num2} = ${power}`);
console.log(`${num1} % ${num2} = ${remainder}`);
console.log(`${num1} & ${num2} = ${and_}`);


// alert(`${num1d} + ${num2} = ${plus}`);
// alert(`${num1} / ${num2} = ${divide}`);
// alert(`${num1} - ${num2} = ${minus}`);
// alert(`${num1} * ${num2} = ${multiple}`);
// alert(`${num1} ** ${num2} = ${power}`);
// alert(`${num1} % ${num2} = ${remainder}`);
// alert(`${num1} & ${num2} = ${and_}`);