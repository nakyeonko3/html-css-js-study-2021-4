


// const students_names = ["Kokoro", "Bob", "Uther","Kim"]

// sayHello(students_names, 23);



// function sayHello(names, ages) {
//     names.forEach(names => {
//         alert(`Hello ${names}! you are ${ages} years old.`);
//     });
// }


function sayHello(name, age) {
   let result = (`Hello ${name}! you are ${age} years old`);
   alert(result);
    return result
}

const greetNico = sayHello("Nico", 23);alert(greetNico);