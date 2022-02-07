const template = document.querySelector<any>("#bookTemplate");
const addBtn = document.querySelector<HTMLElement>(".add");
const bookContainer = document.querySelector<HTMLElement>(".books");
const bookEl = document.querySelectorAll<any>(".bookContainer");

let library: any = [];

loadBooks();

function loadBooks() {
	if (localStorage.getItem("books")) {
		library.push(JSON.parse(localStorage.getItem("books")));
		library = library[0];
		displayBooks();
	}
}

function Book(title: string, author: string, pages: number, read: boolean) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(
	title: string,
	author: string,
	pages: number,
	read: boolean
) {
	library.push(new Book(title, author, pages, read));
	displayBooks();
}

addBtn.addEventListener("click", () => {
	const title = document.querySelector<HTMLInputElement>("#title").value;
	const author = document.querySelector<HTMLInputElement>("#author").value;
	const pages = document.querySelector<HTMLInputElement>("#pages").value;
	if (title && author && pages && isNaN(parseInt(pages)) === false) {
		addBookToLibrary(title, author, parseInt(pages), false);
	} else {
		console.error("There was an error");
	}
});

function displayBooks() {
	bookContainer.innerHTML = "";
	library.forEach((book: any) => {
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
	btn.addEventListener("click", () => {});
});
