//call method
let name ={
    firstname:"karamveer",
    lastname:"garathi",

    //printname: function() {
    // console.log(this.firstname+" "+this.lastname);
   // }
}
    let printname= function(hometown,state) {
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
    }

printname.call(name,"khairthal","rajasthan");

let name2 ={
    firstname:"kuldeep",
    lastname:"garathi",
}
printname.call(name2,"khairthal","rajasthan");


