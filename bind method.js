
let name ={
    firstname:"karamveer",
    lastname:"garathi",
}
    let printname= function(hometown,state) {
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
    }

let myname=printname.bind(name,"khairthal","rajasthan");

console.log(myname);
//bind method just make the function of output and store it ao,that it can ce evoked out later on.

//to evoke the function for getting output we can do this
myname();