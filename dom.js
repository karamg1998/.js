//examine the document object
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 254;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Karamveer';
//console.log(document.forms[0]);
//console.log(document.links);

//console.log(document.images);

// get element by id //
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='karamveer';
//headerTitle.innerText='hello';

//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>hello</h3>';
//header.style.borderBottom='solid 3px #000'

//get element by class name//
//var items=document.getElementsByClassName('title');
//console.log(items[0]);
//items[0].style.fontweight='bold';
//items[0].style.backgroundcolor='green';

//var item=document.getElementsByClassName('list-group-item');
//console.log(item[2]);
//item[2].style.backgroundcolor='green';

//so, by class name it border line only those who consist class name not li.
//for(var i=0;i<item.length;i++)
//{
//    item[i].style.borderBottom='solid 3px #000';
//}

//but with li it border libe all who consist li.
//var li=document.getElementsByTagName('li');
//console.log(li);
//li[1].style.backgroundColor='green';

//queryselector
//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px gray';

//var input=document.querySelector('input');
//input.value='hello';


//var submit=document.querySelector('input[type="submit"]');
//submit.value='send';


//var item=document.querySelector('.list-group-item');
//item.style.color='blue';

//var thirditem=document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.color='white';

//queryselectorall
//var titles=document.querySelectorAll('.title');
//console.log(titles);

//titles[0].textContent='hello';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

//for(var i=0;i<odd.length;i++)
//{
 //   odd[i].style.backgroundColor='green';
//}

//for(var i=0;i<even.length;i++)
//{
//    even[i].style.backgroundColor='green';
//}

//var e=document.querySelectorAll('li');
//console.log(e);
//e[1].style.color='green';

//traversing the dom
//var items=document.querySelector('#items');
//parent
//console.log(items.parentNode);
//items.parentNode.style.background='gray';
//console.log(items.parentNode.parentNode.parentNode);

//parentelement
//console.log(items.parentElement);
//items.parentElement.style.background='gray';
//console.log(items.parentElement.parentElement.parentElement);

//chileNodes
//console.log(items.childNodes);

//childern
//console.log(items.children[3]);


//firstchild
//console.log(items.firstChild);

//firstelementchild
//console.log(items.firstElementChild);

//lastchild
//console.log(items.lastChild);

//lastelementchild
//console.log(items.lastElementChild);

//nextSibling
//console.log(items.nextSibling);

//nextElementsibling
//console.log(items.nextElementSibling);


//previoussibling
//console.log(items.previousSibling);

//previousElemntsibling
//console.log(items.previousElementSibling);
//items.previousElementSibling.style.color='yellow';

//create element

var newdiv=document.createElement('div');

//add class
newdiv.className='hello';

//add id
newdiv.id='2554';

//set attribute
newdiv.setAttribute('title', 'hello div');
//console.log(newdiv);

//create nextnode
var newdivText=document.createTextNode('HEllo');

//add text to div
newdiv.appendChild(newdivText);
//console.log(newdiv);

//pushing to dom
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv, h1);

//using querySelector
var list=document.querySelector('.list-group-item');
list.textContent='hello Item 1';


