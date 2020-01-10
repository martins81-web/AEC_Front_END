// Eric Martins - 12 décembre 2019
// Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.

var compteurPositifs = 0;
var compteurNegatifs = 0;
var nb;

for ( var i = 0 ;; i++)
{
    nb=Number(prompt("Entrez un número"));

    if ( nb === 0)
    {
        break;
    }
    else if (nb < 0)
    {
        compteurNegatifs++;
    }
    else if (nb > 0)
    {
        compteurPositifs++;
    }
}

document.write("Nombre positifs entrés: " + compteurPositifs);
document.write("<br>");
document.write("Nombre négatifs entrés: " + compteurNegatifs);