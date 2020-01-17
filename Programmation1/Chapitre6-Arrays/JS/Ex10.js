//Eric Martins - 09 janvier 2020
// Le collège offre 6 options aux étudiants. Ces options sont :
// INFORMATIQUE
// ADMINISTRATION
// HISTOIRE
// GÉNIE
// GEOGRAPHIE
// BUREAUTIQUE
//
// Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
// Vous lui répondez si OUI ou NON le collège offre cette option.

var options = ["INFORMATIQUE","ADMINISTRATION","HISTOIRE","GÉNIE","GEOGRAPHIE","BUREAUTIQUE"];
var choixEtudiant;
var optionExistante="Non";

choixEtudiant= prompt("Entrez l'option que vous desirez").toUpperCase();

for (let i = 0 ; i < options.length ; i++ )
{
    if (choixEtudiant === options[i]){
        optionExistante="Oui"
    }
}

document.write(optionExistante);

