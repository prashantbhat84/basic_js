//ES5 constructor

function Book(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;
		this.getSummary=function getSummary(){
     return `the title is ${title} printed in the year ${year} with author ${author}`;
					
		}
		
}

const book1= new Book('book1','Prashant','2013');
const book2= new Book('book2','ram','2015');
console.log(book2)



