export class User {
    constructor(
         public id : number,// Create a unique id
         public name : String, // Full Name
         public email : String,
         public phone : number,
         public designation : String, // GET or Manager or Senior Software Engineer or Software Engineer or Project Lead or Technical Lead etc
         public department : String, // IT or Sales or Accounting & Finance  
         public empType : String //Full-time or Intern or Extern
    ){}
}
