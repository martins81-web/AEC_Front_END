// Eric Martins - 24 octobre 2019


//4. Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre d’heures travaillées sont fournies en entrée.

//déclaration de variables
var Heures, TauxHoraire, SalaireBrut;

//Lecture des variables
Heures=Number(prompt("Nombre d'heures travaillées?"));
TauxHoraire=Number(prompt("Quel est le salaire horaire en $?"));

//Calcul du salaire brut
SalaireBrut=Heures*TauxHoraire;

//Affichage du résultat
console.log("Le salaire brut de cet employé est de " + SalaireBrut+"$");
//alert("Le salaire brut de cet employé est de " + SalaireBrut+"$");