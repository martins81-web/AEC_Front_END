// Eric Martins - 24 octobre 2019


//12.13. Lire les quatre éléments d’information suivants :
// le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
// la note de l’examen de mi-session  (compte pour 30%)
// la note de l’examen de fin de session. (compte pour 50%)
//
// Toutes les notes lues sont sur 100.
//
// Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus, et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.


//Déclaration des variables
var Nom;
var NoteLab, NoteExamen1, NoteExamen2;
var NoteFinale;
const PoidsLab=0.2;
const PoidsExamen1=0.3;
const PoidsExamen2=0.5;

//Lecture des variables et calcul de chaque note selon son poids
Nom=prompt("Rentrez le nom de l'étudiant(e):");
NoteLab=Number(prompt("Rentrez sa note au laboratoire en % (0-100)"))*PoidsLab;
NoteExamen1=Number(prompt("Rentrez sa note l’examen de mi-session en % (0-100)"))*PoidsExamen1;
NoteExamen2=Number(prompt("Rentrez sa note l’examen de fin de session en % (0-100)"))*PoidsExamen2;

//Calcul de la note finale
NoteFinale=NoteLab+NoteExamen1+NoteExamen2;

//Affichage
console.log("Évaluation pour l'étudiant(e): "+Nom);
console.log("Note de laboratoire: "+NoteLab+"/20");
console.log("Note de l’examen de mi-session: "+NoteExamen1+"/30");
console.log("Note de l’examen de de fin de session: "+NoteExamen2+"/50");
console.log("Note finale: "+NoteFinale+"%");