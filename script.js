const myLibrary = [];

function book(title, author, numOfPages, isread) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isread;
    let readOrNot = this.isRead ? "read." : "not read yet.";
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.numOfPages} pages, ${readOrNot}`) ;
    };
}

function addBookToLibrary() {
    
}