// Eric Martins - 16 décembre 2019
// Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

var compteurPositifs = 0;
var compteurNegatifs = 0;
var nb=-1;

while ( nb != 0)
{
    nb=Number(prompt("Entrez un número"));

    if (nb < 0)
    {
        compteurNegatifs++;
    }
    else if (nb > 0)
    {
        compteurPositifs++;
    }
    else
    {
        //document.write("Pas un chiffre ou zero<br>");
    }
}

document.write("Nombre positifs entrés: " + compteurPositifs);
document.write("<br>");
document.write("Nombre négatifs entrés: " + compteurNegatifs);