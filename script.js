
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
// a copy in case I mess up this function
// function resetDisplayLibrary(){
//     for (let i=0; i< myLibrary.length; i++)
//     console.log(`${myLibrary[i].title}`);
//     return;
// }

// function resetDisplayLibrary(){}


function DisplayLibrary(){
    for (let i=0; i< myLibrary.length; i++){

        // This section is to create div for each book, so the data can be inserted in the grid
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book'); // this is to separate books in grid
        bookDiv.id= `${myLibrary[i]}`;   // not sure if I will use it but can be helpful to have individual ids
    // This next section is for each aprt of the book, will be useful later for CSS (if i decide to do different colors to each book presentation);
        const titleDiv=document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent= `${myLibrary[i].title}`

        const authorDiv=document.createElement('div');
        authorDiv.classList.add('author');
        authorDiv.textContent= `${myLibrary[i].author}`;


    // putting elements inside the book div
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(authorDiv);

        content.appendChild(bookDiv);

    }

    ;
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    //maybe here i can do DOM to put all myLibrary[i] in the grid '#content' 
    // content.appendChild(bookDiv);
    // content.appendChild(myLibrary[0])
// run a for loop myLibrary[i] 
DisplayLibrary();
// by ${book[0].author}, has ${book[0].pages}
  }

  //testing
  //addBookToLibrary('Subtle Art of Not Giving a F**', 'Mark Manson', 224, true)
  //addBookToLibrary('8 habits of highly effective people', 'Stephen R. Covey', 432, true)


const content = document.getElementById('content');
console.log(content);

const bookDiv = document.createElement('div');
// bookDiv.setAttribute('bookDiv');

