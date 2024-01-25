
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
    // myLibrary.length=0;
    const allBooks = document.querySelectorAll('.book');
    allBooks.forEach(book => {
        book.remove();
    });
    
    
    }





    
  function addDisplayLibrary(){

    
            // This section is to create div for each book, so the data can be inserted in the grid
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book'); // this is to separate books in grid
            // bookDiv.id= `book${myLibrary[myLibrary.length-1]}`;   // not sure if I will use it but can be helpful to have individual ids
            bookDiv.id= `book${myLibrary.length}`; 


        // This next section is for each aprt of the book, will be useful later for CSS (if i decide to do different colors to each book presentation);
            const titleDiv=document.createElement('div');
            titleDiv.classList.add('title');
            titleDiv.textContent= `${myLibrary[myLibrary.length-1].title}`
    
            const authorDiv=document.createElement('div');
            authorDiv.classList.add('author');
            authorDiv.textContent= `${myLibrary[myLibrary.length-1].author}`;
    
            const pagesDiv=document.createElement('div');
            pagesDiv.classList.add('pages');
            pagesDiv.textContent= `${myLibrary[myLibrary.length-1].pages} pages`;
    
            const readDiv = document.createElement('div');
           
           if (myLibrary[myLibrary.length-1].value === true){
    
               readDiv.classList.add('read');
               readDiv.textContent = "read";


           }
               else { 
    
                   readDiv.classList.add('notRead');
                   readDiv.textContent = "Not Read";
                    
                }

                readDiv.addEventListener('click', ()=> {
                    if(readDiv.classList.contains('read')){
                        readDiv.classList.replace('read','notRead');
                        console.log('changed read to bot read')
                    }
                    else if(readDiv.classList.contains('notRead')){
                        readDiv.classList.replace('notRead','read');
                        console.log('changed not read to read')
                    }
                    else{
                        return;
                    }
                
        
                });
                
            
            const deleteDiv = document.createElement('div');
            deleteDiv.classList.add('deleteOption');
           deleteDiv.textContent = 'Delete';
    
    
    
        // putting elements inside the book div
            bookDiv.appendChild(titleDiv);
            bookDiv.appendChild(authorDiv);
            bookDiv.appendChild(pagesDiv);
            bookDiv.appendChild(readDiv);
            bookDiv.appendChild(deleteDiv)
    
            content.appendChild(bookDiv);

    
        ;
    };

// This part is for the buttons in the books that are already created

        // change the book from read to unread and viceversa


 
        const activateToggleRead = () => {
        readDiv.addEventListener('click', ()=> {
            if(readDiv.classList.contains('read')){
                readDiv.classList.replace('read','unread');
                console.log('changed read to unread')
            }
            else if(readDiv.classList.contains('.unread')){
                readDiv.classList.replace('unread','read');
                console.log('changed unread to read')
            }
            else{
                return;
            }
        

        });
    }
    



//###### Important, i may be doing wrongapproach on oing through ALL of the elements everytime I create a new one
// maybe i should just add 1 by 1 and then  when i want to eras ethem just do it y ID. and when adding probably can do with .length to get the last one


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    //maybe here i can do DOM to put all myLibrary[i] in the grid '#content' 
    // content.appendChild(bookDiv);
    // content.appendChild(myLibrary[0])
// run a for loop myLibrary[i] 
// DisplayLibrary();
addDisplayLibrary();
// by ${book[0].author}, has ${book[0].pages}
  }

  //testing
  //addBookToLibrary('Subtle Art of Not Giving a F**', 'Mark Manson', 224, true)
  //addBookToLibrary('8 habits of highly effective people', 'Stephen R. Covey', 432, true)


const content = document.getElementById('content');
console.log(content);

const bookDiv = document.createElement('div');
// bookDiv.setAttribute('bookDiv');


// ## Dialog

const dialog = document.getElementById('bookDialog')
const addBookBtn = document.querySelectorAll('.add-book');
const closeButton = document.querySelectorAll('.closeButton');

// addBookBtn.addEventListener()

addBookBtn.forEach(button => {
    button.addEventListener('click',()=>{
        dialog.showModal();
    });
});

closeButton.forEach(button=>{
button.addEventListener('click',()=>{
    dialog.close();
});

});

// closeButton.addEventListener('click',()=>{
//     dialog.close();
// })


// ###Dialog Modal

const title = document.getElementById('titleInput');
const author = document.getElementById('authorInput');
const pages = document.getElementById('pagesInput');
const select = document.getElementById('selectInput');


const confirmBtn = document.getElementById('confirmBtn');

confirmBtn.addEventListener('click', ()=>
addBookToLibrary(title.value, 
    author.value, 
    pages.value, 
    true));





