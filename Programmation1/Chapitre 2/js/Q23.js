// Eric Martins - 23 novembre 2019
//Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues pour leur haut taux de pollution atmosphérique.
// L’indice de pollution atmosphérique dépend de plusieurs facteurs et il est calculé régulièrement.
//
// L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale.
// Si sa valeur de l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la valeur de l’indice redevienne normale.
// Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50, on avise aussi les industries de la liste C. Pour toutes les autres valeurs, écrire « Valeur impossible ».
//
// Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste devrait être affichée.

//déclaration des variables
var tauxPollution;


//lecture des variables
tauxPollution = Number(prompt("Entrez le taux de pollution atmosphérique?"));


    if ( tauxPollution >= 0.04 && tauxPollution <= 0.31)
    {
        document.write("Valeur normal.");
    }
    else if ( tauxPollution > 0.31 && tauxPollution <= 0.40)
    {
        document.write("Les industries de la liste A doivent suspendre leurs activités.");
    }
    else if ( tauxPollution > 0.40 &&  tauxPollution <= 0.50)
    {
        document.write("Les industries de la liste A et de la liste B doivent suspendre leurs activités.");
    }
    else if ( tauxPollution > 0.50 && tauxPollution <= 1)
    {
        document.write("Les industries de la liste A, B et C doivent suspendre leurs activités.");
    }
    else
    {
        document.write("Valeur impossible.");
    }

