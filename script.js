
/*
To Do
basic UI
myLibrary where i save all teh books in an array
object constructor (function) for books, so i can keep inserting new books
test the object construcotr on the console
function to input info from the book and then  push the new books to the library


UI where the user can put the informaiton of the book to the function/constructor
DOM 


*/

const myLibrary=[]
// Book constructor


function Book(title, author, pages, read  ){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read;

}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    //maybe here i can do DOM to put all myLibrary[i] in the grid '#content' 

  }

// book1 = new Book('Subtle Art of Not Giving a F**', 'Mark Manson', 224, true)
// console.log(book1)

// myLibrary.push(book1);

const content = document.getElementById('content');
console.log(content);

