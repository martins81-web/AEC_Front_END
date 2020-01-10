// Eric Martins - 14 novembre 2019
//4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
// Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez imprimer le résultat.

//déclaration des variables
var nb1, nb2;

//lecture des variables
nb1=Number(prompt("Entrez le premier número"));
nb2=Number(prompt("Entrez le deuxième número"));

//cicle if pour vérifier si la division est valable
if ( 0 === nb2 )
{
    document.write("Division par zéro interdite.");
}
else
{
    document.write("Le résultat de la division est: " + nb1/nb2);
}