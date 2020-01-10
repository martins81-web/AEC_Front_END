// Eric Martins - 24 octobre 2019


//6.Faites un programme qui lit le nom d’un article et son prix de détail.
// Votre programme doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.

//déclaration des variables
var NomArticle, PrixArticle, PrixGros, Profit;

//Lecture des variables
NomArticle=prompt("Rentrez le nom de l'article");
PrixArticle=Number(prompt("Rentrez le prix de détail de l'article en $"));

//Calcul
PrixGros=0.66*PrixArticle;
Profit=PrixArticle-PrixGros;

//Affichage
//Console.log("Le prix de gros pour l'article "+NomArticle+" est de "+PrixGros+"$. Le profit obtenu par sa vente est de "+Profit+"$.");
alert("Le prix de gros pour l'article "+NomArticle+" est de "+PrixGros+"$. Le profit obtenu par sa vente est de "+Profit+"$.");