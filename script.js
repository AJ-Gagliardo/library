
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

function resetDisplayLibrary(){
    for (let i=0; i< myLibrary.length; i++)
    console.log(`${myLibrary[i].title}`);
    return;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    //maybe here i can do DOM to put all myLibrary[i] in the grid '#content' 
    // content.appendChild(bookDiv);
    // content.appendChild(myLibrary[0])
// run a for loop myLibrary[i] 
resetDisplayLibrary();
// by ${book[0].author}, has ${book[0].pages}
  }

  //testing
  //addBookToLibrary('Subtle Art of Not Giving a F**', 'Mark Manson', 224, true)
  //addBookToLibrary('8 habits of highly effective people', 'Stephen R. Covey', 432, true)


const content = document.getElementById('content');
console.log(content);

const bookDiv = document.createElement('div');
// bookDiv.setAttribute('bookDiv');

