// Eric Martins - 14 novembre 2019
//Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

//déclaration des variables
var age;

//lecture des variables
age=Number(prompt("Entrez votre age"));

if (isNaN(age))
    document.write("Age invalide!");
else if ( age >= 18 )
        document.write("Adulte");
else if ( age >= 12 && age <= 17 )
        document.write("Adolescent");
else if ( age < 12 && age >= 0 )
        document.write("Enfant");
else
    document.write("Age invalide!");
