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
	
}
class Magazine extends Book{

	constructor(title,author,year,month){
		super(title,author,year);
		this.month=month;

	}
}
const mag1= new Magazine('BookOne','John doe', '2013','Jan');
console.log(mag1.getSummary());

