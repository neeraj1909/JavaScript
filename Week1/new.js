//Declare a variable x and initialize it with an integer.
var x = 1
console.log("Value of x is: " + x)

//How do you round the number 7.25, to the nearest integer?
var b = Math.round(7.25)
console.log("Value of 7.25 after round-off is: " + b)

//Create a array called colors with the strings red, green and blue inside.
var c = new Array('red', 'green', 'blue')
for(i in c) {
    console.log(i)
}

//How can you find the length of the string you just created?
var c = 'Hello, Neeraj!'
var length = c.length
console.log("length of Hello, Neeraj! is: " + length)

//Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let d = 5
let e = 10.0

if(typeof(d) === typeof(e)) {
    console.log('SAME TYPE');
}

//If y equals 7, and the only other statement is y = y % 3, what would be the new value of y?
y = 7
y = y % 3
console.log("The new value of y: " + y)

/*Write a program to answer the following questions:

1. Can you store multiple types in an array? Numbers and strings?
2. Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?  */
// 1. Yes, we can store multiple value in an array.
var array = [5, '5', 'neeraj'];
for(i in array) {
    console.log(array[i]);
}
// 2. No, it will raise Divion by Zero-Error.
if(6/0 === 10/0) {
    console.log("We can compare infinities");
}
else {
    console.log("We can't compare infinities");
}


