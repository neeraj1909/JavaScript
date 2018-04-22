/*
Here is a quick example to get you started:

let text = "This is a string";
console.log(text.substring(2)); // "is is a string"
console.log(text.substring(5)); // "is a string"
console.log(text.substring(12)); // "ring"

Build a function that takes a string as an argument and make it console log the string in an
"echoed" way like this (given the input "hello")
// hello
// ello
// llo
// lo
// o

Given another string ("pizza")
// pizza
// izza
// zza
// za
// a

Or "græskar"
// græskar
// ræskar
// æskar
// skar
// kar
// ar
// r

Please save your solution to this problem in a file and commit and push it to your github repository.
Once you have it on github post a link on Slack. The deadline is next class, but if you are able to
hand it in sooner we have the chance to review it before class so you can get feedback.
*/

var print = function(s)  {
    for(var i = 0; i < s.length; i++) {
        console.log(s.substring(i,));
    }
}

print("hello");
print("pizza");
