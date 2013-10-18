var Booklist = function() {

    this.unreadBooks = [];
    this.readBooks = [];

    this.addBook = function(newBook){
        this.unreadBooks.push(newBook);
        this.bookShelf = this.unreadBooks.concat(this.readBooks);
        this.booksRead = this.readBooks.length;
        this.booksNotRead = this.unreadBooks.length;
        this.updateLists();
        return console.log(newBook._title + " added successfully.");
    };

    this.finishCurrentBook = function() {
        this.currentBook.readDate = new Date();
        this.currentBook.read = true;
        this.readBooks.push(this.currentBook);
        this.currentBook = this.unreadBooks.shift();
        this.updateLists();
        return console.log("Finished " + this.previousBook._title + '.');
    };

    this.updateLists = function() {
        this.currentBook = this.unreadBooks[0];
        this.nextBook = this.unreadBooks[1];
        this.previousBook = this.readBooks[this.readBooks.length-1];
    };
};


var Book = function(_title, genre, author, read){
    this._title = _title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.readDate = null;
};


var book1 = new Book("The Magical Pope Dragon", "Fantasy", "Nick A", false);
var book2 = new Book("The Magical Pope Unicorn", "Fantasy", "Nick A", false);
var book3 = new Book("The Mostly-Magical Pope Cat", "Fantasy", "Nick A", false);
var book4 = new Book("The Not-Really-Magical-At-All Cat", "Non-Fiction", "Nick A", false);

var nicksBookList = new Booklist();

nicksBookList.addBook(book1);
nicksBookList.addBook(book2);
nicksBookList.addBook(book3);
nicksBookList.addBook(book4);