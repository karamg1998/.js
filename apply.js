let name ={
    firstname:"karamveer",
    lastname:"garathi",

   
}
    let printname= function(hometown,state) {
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
    }

printname.apply(name,["khairthal","rajasthan"]);

let name2 ={
    firstname:"kuldeep",
    lastname:"garathi",
}
printname.apply(name2,["khairthal","rajasthan"]);