// Eric Martins - 14 novembre 2019
//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

//déclaration des variables
var nbMois;

//lecture des variables
nbMois=Number((prompt("Entrez le nombre du mois ex. 3 pour le mois de Mars")));

// cicle pour afficher le mois
    if      ( 1 === nbMois )
        document.write("Janvier");
    else if ( 2 === nbMois )
        document.write("Février");
    else if ( 3 === nbMois )
        document.write("Mars");
    else if ( 4 === nbMois )
        document.write("Avril");
    else if ( 5 === nbMois )
        document.write("Mai");
    else if ( 5 === nbMois )
        document.write("Juin");
    else if ( 7 === nbMois )
        document.write("Juillet");
    else if ( 8 === nbMois )
        document.write("Août");
    else if ( 9 === nbMois )
        document.write("Septembre");
    else if ( 10 === nbMois )
        document.write("Octobre");
    else if ( 11 === nbMois )
        document.write("Novembre");
    else if ( 12 === nbMois )
        document.write("Décembre");
    else
        document.write("Mois invalide");