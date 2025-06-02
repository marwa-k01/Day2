// Task 1

let num = 10 + 2;

if (num > 2 && num < 20 ) {
   console.log("true")
} else {
    console.log("Fales")
}


let user = 'employee'

if (user === 'guest'){
    console.log('login Denied')
} else if (user === 'employee') {
    console.log('Successfully Logged in')
}

let myName = 'Marwa';

let nameLength = myName.length;

if (nameLength > 5){
    alert("More then 5 letter")
} else if (nameLength === 5) {
    alert("Exactly 5 letters")
} else {
    alert("less then 5 letters")
}

// Tesk 2

let x = 30;
x += 10;
x /= 2;
console.log(x);

let y = 250;
y /= 2;
console.log(y);

// Tesk 3

let num1 = 10;

let num2 = 20;

console.log(num1 + num2);
console.log(num1 % num2);

let total = 10;
total++;
console.log(total);

// Task 4

let message = 1 > 10 ? 'Condition is TURE' : 'Condition is FALSE';
console.log(message);

let time = '11:00';
let greeting = time = '12:00' ? 'Good Morning' : 'Good Evening';

console.log(greeting);


// Task 5

let a = -1;
let b = 1;

if(a && b) {
    console.log("hello")
}