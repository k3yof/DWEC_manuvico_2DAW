function cambiaTexto()
{
    document.getElementById('miTexto').style.fontSize='45px';
    document.getElementById('miTexto').style.color='blue';
    document.getElementById('miTexto').innerHTML="Hola soy manu";
}
function cambiaTexto2()
{
    document.getElementById('miTexto').style.fontSize='200px';
    document.getElementById('miTexto').style.color='green';
    document.getElementById('miTexto').innerHTML="El salva es mu malo";
}
document.getElementById('miBoton').addEventListener('click',cambiaTexto);
document.getElementById('suBoton').addEventListener('click',cambiaTexto2);