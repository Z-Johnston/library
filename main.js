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

//
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
        bookInput[3].checked);
        libraryArray.push(book);
};

//
function displayLibrary() {
    for (let i = 0; i < libraryArray.length; i++) {
        const book = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');

        book.classList.add('book');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        bookRead.classList.add('book-read');
        
        bookTitle.textContent = libraryArray[i].title;
        bookAuthor.textContent = libraryArray[i].author;
        bookPages.textContent = libraryArray[i].pages;
        bookRead.textContent = libraryArray[i].read;
        
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        library.appendChild(book);
    } 
}

//Event listener to create + add book to library and show the updated library
submitButton.addEventListener('click', function() {
    addBookInputToLibrary();
    displayLibrary();
});