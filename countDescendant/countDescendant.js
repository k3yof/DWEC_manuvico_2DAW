'use strict';

const lis = document.querySelectorAll('li');
for(let li of lis) {
    
    console.log(li.firstChild.data.trim() + ": " + li.querySelectorAll('li').length);
}