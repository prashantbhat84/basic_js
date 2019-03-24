//object of protos

const bookProtos={
	getSummary:function(){
		return `the title is ${this.title} printed in the year ${
			this.Year
	} with author ${this.author}`;
	},
	getAge:function(){
		const years = new Date().getFullYear() - this.year;
  return years;
	}
}
const book1obj={
	title: {value:'Book One'},
	author:{value:'John Doe'},
	Year:{value:'2013'}
}
const book1= Object.create(bookProtos,book1obj);

console.log(book1.getSummary());
