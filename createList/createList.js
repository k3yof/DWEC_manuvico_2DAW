'use strict';

let ul= document.createElement('ul');
document.body.append(ul);

let data= prompt("Mete el texto para la lista", "");

while(data){

  let li= document.createElement('li');
  
  li.textContent= data;
  
  ul.append(li);

  data = prompt("Mete el texto para la lista", "");
}
