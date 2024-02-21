'use strict';

contents.onclick= function(event){

    function handleLink(href){

      let isLeaving= confirm(`¿Irse a ${href}?`);
      
      if (!isLeaving) return false;
    }

    let target= event.target.closest('a');

    if(target && contents.contains(target)){

      return handleLink(target.getAttribute('href'));
    
    }
};