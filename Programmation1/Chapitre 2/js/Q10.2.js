// Eric Martins - 14 novembre 2019
//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

//déclaration des variables
var nbMois;
var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

//lecture des variables
nbMois=Number((prompt("Entrez le nombre du mois ex. 3 pour le mois de Mars")));

// cicle pour afficher le mois
if      ( nbMois >= 1 && nbMois <= 12 )
    document.write(mois[nbMois-1]);
else
    document.write("Mois invalide");