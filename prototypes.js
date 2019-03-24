function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
//getsummary prototype
Book.prototype.getSummary = function() {
  return `the title is ${this.title} printed in the year ${
    this.year
  } with author ${this.author}`;
};
//getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return years;
};
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("book1", "Prashant", "2013");
const book2 = new Book("book2", "ram", "2015");
console.log(book1);
book1.revise("2012");
console.log(book1);
