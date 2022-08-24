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

var item=document.getElementsByClassName('list-group-item');
//console.log(item[2]);
//item[2].style.backgroundcolor='green';

//so, by class name it border line only those who consist class name not li.
for(var i=0;i<item.length;i++)
{
    item[i].style.borderBottom='solid 3px #000';
}

//but with li it border libe all who consist li.
var li=document.getElementsByTagName('li');
//console.log(li);
for(var i=0;i<li.length;i++)
{
    li[i].style.borderBottom='solid 3px #000';
}




