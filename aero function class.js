class student

{
    constructor(name,age,marks)
    {
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
     eligible(minPlacementAge)
    {
      console.log(this);
      return(minMarks) => 
       {
     console.log('inside eligibleForCurrentCompany',this)
        if(this.marks>minMarks && this.age>minPlacementAge)
        {
            console.log(this.name,'ready for placement');
        }
        else{
            console.log(this.name,'is not ready for placement');
        }
       }
    }
}

let jill=new student('jill',20, 30);
let john=new student('john',21, 38);
let karamveer=new student('karamveer',22, 42);
let kuldeep=new student('kuldeep',23, 55);
let krishna=new student('krishna',24, 86);

jill.eligible(18)(40);
john.eligible(18)(40);
karamveer.eligible(18)(40);
kuldeep.eligible(18)(40);
krishna.eligible(18)(40);