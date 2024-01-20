
/*
To Do
basic UI
myLibrary where i save all teh books in an array
object constructor (function) for books, so i can keep inserting new books
test the object construcotr on the console


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

book1 = new Book('Subtle Art of Not Giving a F**', 'Mark Manson', 224, true)
console.log(book1)