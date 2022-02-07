const template = document.querySelector("#bookTemplate");
const addBtn = document.querySelector(".add");
const bookContainer = document.querySelector(".books");
const bookEl = document.querySelectorAll(".bookContainer");
let library = [];
loadBooks();
function loadBooks() {
    if (localStorage.getItem("books")) {
        library.push(JSON.parse(localStorage.getItem("books")));
        library = library[0];
        displayBooks();
    }
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
    displayBooks();
}
addBtn.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    if (title && author && pages && isNaN(parseInt(pages)) === false) {
        addBookToLibrary(title, author, parseInt(pages), false);
    }
    else {
        console.error("There was an error");
    }
});
function displayBooks() {
    bookContainer.innerHTML = "";
    library.forEach((book) => {
        const bookTemplate = template.content.cloneNode(true).querySelector("div");
        const bookTitle = bookTemplate.querySelector(".title");
        const bookAuthor = bookTemplate.querySelector(".author");
        const bookPages = bookTemplate.querySelector(".pages");
        const bookRead = bookTemplate.querySelector(".read");
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        bookContainer.appendChild(bookTemplate);
    });
    localStorage.setItem("books", JSON.stringify(library));
}
bookEl.forEach((book) => {
    const btn = book.querySelector("button");
    btn.addEventListener("click", () => { });
});
//# sourceMappingURL=main.js.map