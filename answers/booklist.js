// BookManager class
class BookManager {
    constructor(currentId = 0) {
        // constructor with a paramater currentId set to 0
        this._books = []; // initialize an array books
        this.currentId = currentId; // set the value of currentId
    }

    // function addBook
    addBook(name, genre, author = "") {
        const newBook = {
            // object book consists of properties id, name,genre,author, img
            id: this.currentId++,
            name: name,
            genre: genre,
            author: author
        };

        this._books.push(newBook); // push the newly created book to the books array
    }

    get books() {
        return this._books;
    }

}

//outside the class, create an instance of BookManager
const bookList = new BookManager();

bookList.addBook("The Alchemist", "Life", "Paulo Coelho");
bookList.addBook("Time to Play", "Children's Book", "Bluey");

console.log(bookList.books);


