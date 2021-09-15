// BookManager class
// We are creating a class that will manage a list of books. Each time we add a book, we want our new book to be added to a list with a unique, incremented id.
// Let's try to code this down below!

class BookManager {
// this is a constructor with a paramater currentId set to 0 by default
  constructor(currentId) {
      // 1. initialize an empty array called books
    this._books = [];
      // 2. initialize a currentId set to currentId
    this._currentId = 0;
    }


   // 3. function getter should return the value of our books array
   get books() {
      return this._books
}

  // function addBook should create an object and push it to our books array
  // it should take in a name, genre and author and by default have an empty string
  addBook(name = "", genre = "", author = "") 
  {
      // 4. Create an object assigned to a variable for the new book using parameters given to addBook
        const newBook = 
      {
        id: this._currentId++,
        name: name,
        genre: genre,
        author: author,
      }
          // a) your object should consist of properties id, name,genre and author with values added when we call this method
          // don't forget that this may require some parameters to be used as values
          // b) id should be unique and increment by 1 every new instance
          // c) if no argument is given, the properties should equal an empty string

      // 5. Push the newly created object to our books array
      this._books.push(newBook);
      // hint: note that best practice would be to access our books array using the get method
      
  }

};

// 6. outside the class, create an instance of BookManager
const bookList = new BookManager()
// 7. add two books with the following properties to our instance
bookList.addBook("The Alchemist", "Life", "Paulo Coelho")
bookList.addBook("Time to Play", "Children's Book", "Bluey")
// "The Alchemist", "Life", "Paulo Coelho"
// "Time to Play", "Children's Book", "Bluey"

// 8. console log our books array to check that the new books were added
console.log(bookList.books);

