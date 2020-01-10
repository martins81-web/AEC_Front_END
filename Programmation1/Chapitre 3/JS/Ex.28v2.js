//Eric Martins - 17 décembre 2019
//Écrire un programme qui saisit un entier et qui l'affiche à l'envers. Par exemple, l'utilisateur saisit 123456 et le programme affiche 654321.
// Il est interdit d’utiliser les string pour cette question!
//
// Pour cela il faudra utiliser la division et le modulo. Indice: 153%10 = 3 et 153/10 = 15

var entier=1;
var i=0;

entier=Number(prompt ("Entrez un nombre"));
document.write(entier+"<br>");

while ( entier > 1)
{
        document.write(Math.floor(entier % 10));
        entier = entier / 10;
}