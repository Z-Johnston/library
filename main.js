const addBookButton = document.querySelector('.add-book');

let library = [];

//
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? 'not read yet' : 'has been read'}`;
}

//
function addBookToLibrary(title, author, pages, read) { 
    return library.push(new Book(title, author, pages, read))
};

