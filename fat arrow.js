let getA=(a)=>

{

   return a;

}

console.log(getA(2));



var a=5;

//we can use _ on plave of ()

let square=()=>

{

    return a*a;

}

console.log(square());





let sum=(a,b)=>

{

   return a+b;

}

console.log(sum(4,5));



var x=function()

{

    this.val=1;

    setTimeout(()=>

    {

        this.val++;

        console.log(this.val);

    },1)

}



var xx=new x();



var t=function()

{

    console.log(arguments[0]);

}

t(1,2,3);





var u=(...n)=>//without ...n aero function not gives desired output

{

    console.log(n[0]);

}

u(1,2,3);