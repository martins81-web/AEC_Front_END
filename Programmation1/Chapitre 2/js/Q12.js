// Eric Martins - 14 novembre 2019
//Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

//déclaration des variables
var ValeurVehicule, Age, Sexe;

//lecture des variables
ValeurVehicule = Number(prompt("Quel est le valeur de votre voiture?"));
Age = Number(prompt("Quel est votre age?"));
Sexe = prompt("Quel est votre genre? (m/f)");

// Calcul du prix d'assurance selon les conditions
if ( Age >= 16)
{
    if ( "m" === Sexe.toLowerCase())
    {
        if ( Age >= 16  && Age <= 25 )
        {
            document.write("<p class='masculin'>Votre prix d'assurance est: " + ValeurVehicule * 5/100 + "$</p>");
        }
        else
            document.write("<p class='masculin'>Votre prix d'assurance est: " + ValeurVehicule*3/100 + "$</p>");
    }
    else if ( "f" === Sexe.toLowerCase())
    {
        if ( Age >= 16  && Age <= 25 )
            document.write("<p class='feminin'>Votre prix d'assurance est: " + ValeurVehicule*3/100 + "$</p>");
        else
            document.write("<p class='feminin'>Votre prix d'assurance est: " + ValeurVehicule*2/100 + "$</p>");
    }
    else
        document.write("Ce genre n'existe pas!");
}
else
    document.write("Vous avez pas l'age réquis pour conduire.");
