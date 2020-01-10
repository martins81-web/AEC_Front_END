// Eric Martins - 24 octobre 2019


//2. Calculer la surface d'un rectangle  dont la longueur et la largeur sont lues à l'écran

//variables
var longueur, largeur, surface;

//Lecture des variables
longueur=Number(prompt("Entrez la longueur en cm:"));
largeur=Number(prompt("Entrez la largeur en cm"));

//Calcul de la surface
surface=longueur*largeur;

// Affichage du resultat
console.log("La surface est d'un rectangle avec "+longueur+"cm de longueur et "+largeur+"cm de largeur est "+surface+"cm carrés.");
//alert("La surface est d'un rectangle avec "+longueur+"cm de longueur et "+largeur+"cm de largeur est "+surface+"cm carrés.");