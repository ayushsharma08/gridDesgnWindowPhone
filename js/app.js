// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.abs(-2));
// console.log(Math.acos(0));
// console.log(Math.exp(0));
// let givenNumber = prompt(givemeanumber);
// switch (givenNumber) {
//     case isNumber(givenNumber):
//         if (Math.acosh(givenNumber) != NaN) {
//             console.log(`Your given number ${givenNumber} is greater than 1`)
//         }
//         break;

//     default: console.log(prompt(pleasegivethenumber!));
//         break;
// }
//MY bool list app \
// TO make a book object and immitiate things 
class Book {
    constructor(name, author, ISBN) {
        this.name = name;
        this.author = author;
        this.ISBN = ISBN;
    }
}
//for displaying things and UI Things 
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) =>
            UI.addBookToList(book));

    }
    static addBookToList(book) {
        const list = socument.querySelector('#book-list');

        const row = socument.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class="btn btn-danger btn-sm delete
        >X</a></td>
        `;
        list.appendChild(row);
    }
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(documet.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //to vanish in 3 second
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    // to clear the fields 
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//store 
class store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books= Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
}
