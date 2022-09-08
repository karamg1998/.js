let student ={
    age:20
}
    let printname= function() {
    console.log(this.age);
    }

var Age=printname.bind(student);

console.log(Age);
Age();