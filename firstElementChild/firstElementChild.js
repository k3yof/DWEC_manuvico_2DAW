'use strict';

let table= document.body.firstElementChild;

// your code
for(let i= 0; i < table.rows.length; i++) {
    
    let row= table.rows[i];

    row.cells[i].style.backgroundColor= 'red';
}