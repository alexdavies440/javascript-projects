// Define your Book class here:
class Book {
    constructor(title, author, copyrightYear, isbn, numPages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightYear = copyrightYear;
        this.isbn = isbn;
        this.numPages = numPages; 
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }

}
// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightYear, isbn, numPages, timesCheckedOut, discarded){
        super(title, author, copyrightYear, isbn, numPages, timesCheckedOut, discarded);
    }
    toDiscard(currentYear) {
        if (currentYear - this.copyrightYear > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightYear, isbn, numPages, timesCheckedOut, discarded) {
        super(title, author, copyrightYear, isbn, numPages, timesCheckedOut, discarded);
    }
    toDiscard() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let shadyBook = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '000000000000', 1147, 1, 'No');
// Code exercises 4 & 5 here:

prideAndPrejudice.checkout(5);

shadyBook.toDiscard(2024);

console.log(shadyBook);

prideAndPrejudice.checkout(70);

prideAndPrejudice.toDiscard();

console.log(prideAndPrejudice);
