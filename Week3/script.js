/*
Open a new js file and start by declaring an array that contains 10 strings. These strings should be
of book titles you have read (or made up) and be lowercase without spaces or special characters so
that you can use these later as Id's.
(Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
*/

var books = ["philip_k_dick", "celeste_ng", "mindy_kaling", "tom_wolfe", "chelsea_handler",
            "lauren_weisberger", "mark_haddon", "dale_carnegie", "judi_barrett", "gabriel_garcía_márquez"];

/*
Create a basic html file called index.html and use it to load the js file, confirm the console.log show
the array. (This is for debugging and making sure everything is in order. Delete it later when
you're done :))
*/

console.log(books);

/*
Make a function (or functions) that generate a ul with li elements for each book ID in the array using a
for loop.
*/
function  generate_ul_with_li(books)  {
for (let i = 0; i < books.length; i++) {
    const ul = document.createElement('ul');
    document.querySelector('body').appendChild(ul);

    const li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML = books[i];
}
}

/*
Make an object containing information for each book. Each item (object) in this object should have the
book ID you thought up in point 1 as a key, and it should have at least the following
fields: title, language and author.
*/

var book = [
{
    "Id": 1,
    "title": "Godan",
    "language": "Hindi",
    "author": "Munshi Premchand"
},
{
    "Id": 2,
    "title": "Rashmirathi",
    "language": "Hindi",
    "author": "Ramdhari Singh Dinkar"
},
{
    "Id": 3,
    "title": "Chandrahas",
    "language": "Hindi",
    "author": "Maithisharan Gupta"
}
];

/*
Now change the function you used to display the book ID's in a list to take the actual information about
the book from the object and display that. Make sure you choose the right html elements for each piece of
info, for instance, a heading for the title.
*/

function generate_ul_with_li(book)  {
    for  (let i = 0; i < book.length; i++)  {
        const ul = document.createElement('ul');
        document.querySelector('body').appendChild('ul');

        const li = document.createElement('li');

        const id = document.createElement('Id');
        const title = document.createElement('h1');
        const lang = document.createElement('language');
        const auth = document.createElement('author');

        ul.append(li);

        li.appendChild(id);
        id.innerHTML(book[i].Id);
        li.appendChild(title);
        title.innerHTML(book[i].title)
        li.appendChild(lang);
        lang.innerHTML(book[i].language)
        li.appendChild(auth);
        auth.innerHTML(book[i].author)


    }
}
