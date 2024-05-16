const myLibrary = [];

function book(title, author, numOfPages, isread) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isread;
    let readOrNot = this.isRead ? "read." : "not read yet.";
    this.info = function () {
        return (`${this.title} by ${this.author}, ${this.numOfPages} pages, ${readOrNot}`);
    };
}

// We are going to store all the books in the form of an array.

//This function will be used to take user's input and store the new book objects into an array. 
function addBookToLibrary() {

}

// Write a function that will loop through the array and display each book on the page. We can display them on a card.

// A button that will add a new book onto out page. This will open up a dialog box and we will try to work on it.

// We will have button on each book display to remove the given book from the library.

// Add a button on each book display to change it's read status. 