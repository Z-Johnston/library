const submitButton = document.querySelector('.submit-button');
const bookInput = document.querySelectorAll('input');
const library = document.querySelector('.library');

//Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//library for book objects to be added to
let libraryArray = [];

//Info function to return full Book info 
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? 'not read yet' : 'has been read'}`;
}

// Add book function to create a new Book object from the submitted
// form data and add that Book to the library array
function addBookInputToLibrary() { 
    const book = new Book(
        bookInput[0].value,
        bookInput[1].value,
        bookInput[2].value,
        `${bookInput[3].checked ? 'Read' : 'Not Read'}`);
        libraryArray.push(book);
};

//Create book div and children divs for info, assign input to info divs, append book div to library
function updateLibraryDisplay() {
    const book = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookRead = document.createElement('button');

    book.classList.add('book');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookRead.classList.add('book-read');
    
    bookTitle.textContent = `Title: ${libraryArray[libraryArray.length - 1].title}`;
    bookAuthor.textContent = `Author: ${libraryArray[libraryArray.length - 1].author}`;
    bookPages.textContent = `Pages: ${libraryArray[libraryArray.length - 1].pages}`;
    bookRead.textContent = libraryArray[libraryArray.length - 1].read;
    
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(bookRead);
    library.appendChild(book);
}

//clear the inputs
function resetForm() {
    bookInput[0].value = '';
    bookInput[1].value = '';
    bookInput[2].value = '';
    bookInput[3].checked = false;
}

//Event listener to create + add book to library and show the updated library
submitButton.addEventListener('click', function() {
    addBookInputToLibrary();
    updateLibraryDisplay();
    resetForm();
});