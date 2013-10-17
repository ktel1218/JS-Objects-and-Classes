var Booklist = function() {

    this.unreadBooks = [];
    this.readBooks = [];

    this.bookShelf = this.unreadBooks + this.readBooks;
    //array of book objects
    this.booksRead = this.readBooks.length;
    //number
    this.booksNotRead = this.unreadBooks.length;
    //number
    this.currentBook = this.unreadBooks[0];
    this.nextBook = this.unreadBooks[1];
    //book object
    
    //book object
    this.previousBook = this.readBooks[this.readBooks.length-1];
    //book object
    this.addBook = function(newBook){
        this.unreadBooks.push(newBook);
    };
    
    //function
    this.finishCurrentBook = function() {
        this.currentBook.readDate = new Date.now();
        this.currentBook.read = true;
        this.readBooks.push(this.currentBook);
        this.currentBook = this.unreadBooks.shift();

        // mark book read ***
        // assign read date ***
        // last current book read goes into read books
        // change current book to be next book to be read
    };

    //function

};

var Book = function(_title, genre, author, read){
    this._title = _title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    //Boolean
    this.readDate = null;
    //js Date Object

};

