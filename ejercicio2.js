const postres=[
    "imgs/natillas.jpg",
    "imgs/flan.jpg",
    "imgs/tartaqueso.jpg",
    "imgs/choco.jpg"
]

const image = document.getElementById("imgPrimer");
let cont =1;

function cambiandoImagenes()
{
    if(cont<postres.length)
    {
        image.src=postres[cont];
        cont = ++cont %postres.length;
    }
    else
    {
        cont =0;
        image.src = postres[cont];
        cont++;

    }
}
image.addEventListener('click',cambiandoImagenes);
