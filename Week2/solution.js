//1. Create a function that takes 3 arguments and returns the sum of the three arguments.
function sum_of_three_numbers(a, b, c) {
    return (a + b + c);
}

sum_of_three_numbers(1, 2, 3);


//2. Create a function named colorCar that receives a color, and prints out,
//"a red car" for example. (Hint: put it in your file and run it like before.)
function colorCar(color) {
    console.log('a' + " " + color + " " + 'car');
}

colorCar('red');


//3. Create an object and a function that takes the object as a parameter
//and prints out all of its names and values.
var obj = {
  a: 1,
  b: "this is the letter b",
};

function print(object)  {
    for(var x in object)  {
        console.log(x + ": " + object[x]);
    }
}

print(obj);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
//And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
function vehicleType(color, code)  {
    if(code == 1)  {
        console.log('a' + " " + color + " " + 'car');
    }
    else  {
        console.log('a' + " " + color + " " + 'motorbike');
    }
}

vehicleType('red', 1);
vehicleType('blue', 2);


/*
5. Can you write the following without the if statement,
but with just as a single line with console.log(...);?

if (3 == 3) {
    console.log("true")
} else {
    console.log("false")
}
*/

console.log(3 == 3);


/*
6. Create a function called vehicle, like before, but takes another parameter called age,
so that vehicle("blue", 1, 5) prints "a blue used car"
*/
function vehicle(color, code, age)  {
    if(age >= 5)  {
        if(code == 1)  {
            console.log('a' + " " + color + " " + 'used car');
        }
        else  {
            console.log('a' + " " + color + " " + 'used motorbike');
        }
    }
    else  {
        if(code == 1)  {
            console.log('a' + " " + color + " " + 'car');
        }
        else  {
            console.log('a' + " " + color + " " + 'motorbike');
        }
    }

}

vehicle("blue", 1, 5);
vehicle("red", 2, 1);
vehicle("blue", 1, 0);
vehicle("red", 2, 0);



// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
var vehicle = ["motorbike", "caravan", "bike", "splender", "avenger"];


// 8. How do you get the third element from that list?
var third_element = vehicle[2];


/*
9. Change the function vehicle to use the list of question 4.
So that vehicle("green", 3, 1) prints "a green new caravan".
*/
function vehicleTypeAns(color, age, code)  {
    if(age <= 3)  {
        if(code == 1)  {
            console.log('a' + " " + color + " " + 'new caravan');
        }
        else  {
            console.log('a' + " " + color + " " + 'new motorbike');
        }
    }
    else  {
        if(code == 1)  {
            console.log('a' + " " + color + " " + 'car');
        }
        else  {
            console.log('a' + " " + color + " " + 'motorbike');
        }
    }
}

vehicleTypeAns('red', 5, 1);
vehicleTypeAns('blue', 2, 2);
vehicleTypeAns("green", 3, 1);


/*
10. Use the list of vehicles to write an advertisement. So that it prints something like:
"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
*/
var vehicle = ["cars", "motorbikes", "caravans", "bikes"];

var string = "Amazing Joe's Garage, ";

for(var i in vehicle)  {
    if(vehicle[i] === "bikes") {
        string = string + "and " + vehicle[i] + ".";
    }
    else  {
    string = string + vehicle[i] + ", ";
    }
}

console.log(string);


/*
11. What if you add one more vehicle to the list, can you have that added to the advertisement without
changing the code for question 7?
*/

//No, we can not have that added to the advertisement without changing the code for question 7.

var vehicle = ["motorbike", "caravan", "bike", "splender", "avenger"];
vehicle.push("cars");
console.log(vehicle);


// 12. Create an empty object.
var fruits = [];
console.log(fruits);


/*
13. Create a function that takes two objects as parameters and compares them.
You will actually need to write two functions — one that compares with == and one that compares with ===.
Remember that objects can have objects inside of them so you'll need to find a way to compare every
element of every object (types and values). For example:


var obj1 = {
  a: 1,
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};

var obj2 = {
  a: "1",
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};


Comment- In our example we'll say that `obj1 == obj2` is `true` and `obj1 === obj2` is `false`. Make sure you can see why before you write any code!

Note: give this exercise your best shot but don’t spend more than, say, one hour on it.
*/

function compareFirst(obj1, obj2)  {
    console.log(obj1 == obj2);
}

function compareSecond(obj1, obj2)  {
    console.log(obj1 == obj2);
}

var obj1 = {
  a: 1,
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};

var obj2 = {
  a: "1",
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};

compareFirst(obj1, obj2);
compareSecond(obj1, obj2);


/*
14. We saw that we can pass functions as arguments to other functions.
Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
        // What to do here?
}

function bar() {
        console.log('Hello, I am bar!');
}

foo(bar);

*/




/*
15. Write some code to test two arrays for equality using == and ===. Test the following:

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output.
Press the Run button in the upper right corner to run the code.

More insights from this Stack Overflow question.
*/

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

no, x == y
no, x === y
yes, z == y
no, z == x

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

/*
16. Take a look at the following code:

var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not).

Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}
*/

var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

o2['soo'] = 'sar';

console.log(o2);
console.log(o3);

Yes, order that we assign matter because if we are referencing first object to second object
then first object must be defined.

/*
18.What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;

‘Coerce' means to try to change -
so coercing var x = '6' to number means trying to change the type to number temporarily.
*/
