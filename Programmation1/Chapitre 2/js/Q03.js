// Eric Martins - 14 novembre 2019
//3.  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

//déclaration des variables
var nb1, nb2;

//lecture des variables
nb1=Number(prompt("Entrez le premier número"));
nb2=Number(prompt("Entrez le deuxième número"));

//cicle if pour verifier se les deux nombre sont plus grands que 9

if ( nb1 > 9 && nb2 > 9 )
{
    document.write("BONJOUR");
}
else
{
    document.write("BONSOIR");
}
