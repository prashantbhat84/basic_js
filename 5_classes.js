class Book{
	constructor(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;
	}
	getSummary(){
		return `the title is ${this.title} printed in the year ${
			this.year
	} with author ${this.author}`;
	}
	getAge(){
		const years = new Date().getFullYear() - this.year;
  return years;
	}
	revise(newYear){
		this.year = newYear;
  this.revised = true;
	}
	static topBookStore(){
		return 'Knowledge center';
	}
}
//instantiate the object
book1 = new Book('Book1','John doe','2013');
/* console.log(book1);
book1.revise('2019');
console.log(book1); */
console.log(Book.topBookStore());