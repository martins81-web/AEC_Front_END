// Eric Martins - 14 novembre 2019
//Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

//déclaration des variables
var revenu;


//lecture des variables
revenu=Number(prompt("Entrez votre revenu"));

// Calcul et affichage de l'impot a charger
    if (isNaN(revenu))
        document.write("Revenu invalide!");
    else if ( revenu >= 0 && revenu <= 7000)
        document.write("Impôt provincial à charger: " + revenu * 16/100);
    else if ( revenu > 7000 && revenu <= 14000 )
        document.write("Impôt provincial à charger: " + (1120 + (revenu - 7000) * 19.5/100) + "$");
    else if ( revenu > 14000 && revenu <= 23000 )
        document.write("Impôt provincial à charger: " + (2485 + (revenu - 14000) * 21.5/100) + "$");
    else if ( revenu > 23000 && revenu <= 50000 )
        document.write("Impôt provincial à charger: " + (4420 + (revenu - 23000) * 24.5/100)  + "$");
    else if ( revenu > 50000 )
        document.write("Impôt provincial à charger: " + (11035 + (revenu - 50000) * 26/100) + "$");
    else
        document.write("Revenu invalide!");
