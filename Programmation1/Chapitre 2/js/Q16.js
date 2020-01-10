// Eric Martins - 14 novembre 2019
//16. Lire 2 nombres au clavier.
//         Si ces 2 nombres sont :
//             supérieurs ou égaux à 10, affichez leur somme
//             inférieurs à 10, affichez leur produit
//         Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

//declarations des variables
var nb1, nb2;

//lecture des variables
nb1=Number(prompt("Entrez le premier número"));
nb2=Number(prompt("Entrez le deuxième número"));

    if ( nb1 >= 10 && nb2 >= 10 )
        document.write( nb1 + nb2 );
    else if ( nb1 < 10 && nb2 < 10)
        document.write( nb1 * nb2 );
    else if (( nb1 >= 10 && nb2 < 10) || ( nb2 >= 10 && nb1 <10 ))
            if ( nb1 > nb2 )
                document.write( nb1 - nb2 );
            else
                document.write( nb2 - nb1 );