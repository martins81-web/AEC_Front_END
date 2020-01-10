// Eric Martins - 05 décembre 2019
// Question 3 - Examen 1
// Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.
//
//     Le prix de base de la Pizza au fromage est de 10$.
//
//     Si on veut des légumes, il faut ajouter 5$ au prix initial.
//     Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
//     Si on veut de la sauce, il faut ajouter 1$ par personnes.
//     Le TPS s’élève à 5% du prix sans les taxes.
//     Le TVQ s’élève à 9,975% du prix sans les taxes.
//
//     Produisez une facture qui résume l’achat, le prix avant et après les taxes.

//déclaration des variables
var legumes;
var pepperoni;
var sauce;
var nombrePersonnes;
var resumeAchat = "Grande Pizza au fromage <b>10$</b><br>";
var prix = 10;
var TPS = 0.05;
var TVQ = 0.09975;
var valide = true;
var prixfinal;

//lecture des variables en simultanee avec certain calcules

//legumes
legumes = Number (prompt("Le prix de base de la Pizza au fromage est de 10$:\nVoulez vous des légumes? (5$ en sous)\nOption 1. Oui\nOption 2. Non"));

if (legumes === 1)
{
    resumeAchat += "Avec légumes <b>5$</b><br>";
    prix = prix + 5;
}
else if (legumes === 2)
{
    resumeAchat += "Sans légumes<br>";
}
else
{
    valide = false;
}

//pepperoni
pepperoni = Number (prompt("Voulez vous du pepperoni? (8$ en sous)\nOption 1. Oui\nOption 2. Non"));

if (pepperoni === 1)
{
    resumeAchat += "Avec pepperoni <b>8$</b><br>";
    prix = prix + 8;
}
else if (pepperoni === 2)
{
    resumeAchat += "Sans pepperoni <br>";
}
else
{
    valide = false;
}

//sauce
sauce = Number (prompt("Voulez vous de la sauce? (1$ par personne en sous)\nOption 1. Oui\nOption 2. Non"));

if (sauce === 1)
{
    nombrePersonnes = Number ( prompt("La sauce est pour combien de personnes?") );
    if (isNaN(nombrePersonnes) || nombrePersonnes < 0)
    {
        valide = false;
    }
    else if (nombrePersonnes === 0)
    {
        resumeAchat += "Sans sauce.";
    }
    else {
        resumeAchat += "Sauce pour " + nombrePersonnes + " personne(s) <b>"+nombrePersonnes+"$</b><br>";
        prix = prix + nombrePersonnes;
    }
}
else if (sauce === 2)
{
    resumeAchat += "Sans sauce.";
}
else
{
    valide = false;
}

// Calcul du prix
prixfinal = prix + prix * TPS + prix * TVQ;
prix = prix.toFixed(2) ;
prixfinal = prixfinal.toFixed(2) ;

// Affichage du résume de l'achat, du prix avant et après les taxes.
if (valide)
{
    document.write("<h2><u>Résumé de l’achat: </u></h2>" +
        "<p>" + resumeAchat + "</p>"+
        "<b>Prix avant tax: </b>"  + prix + "$ " + "<br>" +
        "<b>Prix aprés tax : </b>" + prixfinal + "$<br>");
    document.write('<img src="https://i.imgur.com/0WNvUqr.jpg" alt="Pizza">');
}
else
{
    alert("Vous avez rentré des choix invalides!");
}
