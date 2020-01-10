// Eric Martins - 14 novembre 2019
//8.    Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
//(Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une semaine de travail normale est de 40 heures.

//déclaration des variables
var tauxHoraire, nombreDheuresTravaillees, heuresExtra;

//lecture des variables
tauxHoraire=Number(prompt("Entrez votre taux horaire"));
nombreDheuresTravaillees=Number(prompt("Combien d'heures avez vous travaillé?"));


if ( nombreDheuresTravaillees <= 40)
    salaire = nombreDheuresTravaillees * tauxHoraire;
else
    {
    heuresExtra = nombreDheuresTravaillees-40;
    salaire = 40*tauxHoraire + heuresExtra*(2*tauxHoraire);
    }

document.write(salaire + "$");

