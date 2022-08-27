// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

var read_all_data=document.getElementById("read_all_data")
// Listen for form submit
myForm.addEventListener('submit', onSubmit);


//adding element in object
function onSubmit(e) {
  e.preventDefault();
  
  let myObj = {
      name : nameInput.value,
      email : emailInput.value
  };
  
  myObj_serialized=JSON.stringify(myObj);
  localStorage.setItem('myObj',myObj_serialized);

  myObj.deserialized=JSON.parse(localStorage.getItem('myObj'));
  console.log(myObj.deserialized);
  
  
}



read_all_data.onclick=function(e){
  var keys=Object.keys(localStorage);
  console.log(keys);

  for(var key of keys){
      console.log("Key : "+key+" : Value : "+localStorage.getItem(key));
  }
}