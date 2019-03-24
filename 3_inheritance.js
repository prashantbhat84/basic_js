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
//magzine constructor
function Magazine(title,author,year,month) {
	Book.call(this,title,author,year);
	this.month=month;
	
};
//inherit prototype
Magazine.prototype= Object.create(Book.prototype)
//instantiate mangzine
const mag1 = new Magazine('Mag One','John Doe','2015','Aug');
Magazine.prototype.constructor= Magazine;
console.log(mag1);
