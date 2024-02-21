function createTree(container,data)
{
    let ul= document.createElement('ul');
    container.appendChild(ul);

    for(let key in data) 
    {

        let li= document.createElement('li');
        li.textContent= key;

        if(Object.keys(data[key]).length > 0) 
        {
          createTree(li, data[key]);
        }

        ul.appendChild(li);
    }
}

let data= {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
        "sequoia": {},
        "oak": {}
        },
        "Flowering": {
        "apple tree": {},
        "magnolia": {}
        }
    }
};

let container= document.getElementById('container');
createTree(container, data);