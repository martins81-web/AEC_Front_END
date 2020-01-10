// Eric Martins - 14 novembre 2019
//1.  Lire deux nombres et afficher le plus grand des deux.

//déclaration des variables
var nb1, nb2;

//lecture des variables
nb1=Number(prompt("Entrez le premier número"));
nb2=Number(prompt("Entrez le deuxième número"));

//cicle if pour verifier le plus grand des deux

    if ( nb1 < nb2 )
        {
            document.write("Le número plus grand est de deuxième:" + nb2);
        }
    else if ( nb1 > nb2 )
        {
            document.write("Le número plus grand est le premier:" + nb1);
         }
    else
        {
            document.write("Les deux número sont égales");
        }