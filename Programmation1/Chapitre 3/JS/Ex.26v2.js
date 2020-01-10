//Eric Martins - 17 décembre 2019
// le jeu de carte Yablon révisé.
//
// Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. Le joueur doit ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée entre les deux premières cartes.
// S’il remporte son pari, il gagne la partie, sinon il perd.
// Nous proposerons ici une version quelque peu modifiée du jeu.
// Pour rendre les paris plus intéressants, le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes).
// Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il doit ensuite demander à l’utilisateur de faire ses paris.
// Lorsque l’utilisateur perd, le nombre de prédictions remportées est affiché.
// formule= Math.floor(Math.random() * ((y-x)+1) + x);       x-start y-end

var i=0;
var nb1;
var nb2;
var tirage;
var paris='Oui';
var compteurPredictions=0;
var resultat='Oui';
var pluspetit, plusgrand;


while ( paris === resultat)
{
    nb1= Math.floor(Math.random()*13 + 1);
    nb2= Math.floor(Math.random()*13 + 1);

    if (nb1 < nb2)  // determine entre les deux chiffres quel est le plus petit et le plus grand
    {
        pluspetit=nb1;
        plusgrand=nb2;
    }
    else
    {
        pluspetit=nb2;
        plusgrand=nb1;
    }

    paris = prompt("Les deux nombre sortis sont: \n"+
        pluspetit + " et " + plusgrand + "\n"
        + "Le prochain nombre a être tiré será entre ces deux nombre? \n" +
        "O-OUI ou N-NON?");

    tirage= Math.floor(Math.random()*13 + 1);

    paris= paris.toUpperCase();
    if ( paris === 'O')
    {
        paris = "Oui";
    }
    else if ( paris === 'N')
    {
        paris = "Non";
    }
    else
    {
        paris = "Mauvais choix";
    }


    if ( tirage > pluspetit && tirage < plusgrand ) //verifie si le tirage est entre les deux nombre
    {
        resultat='Oui';  //Entre les deux
    }
    else
    {
        resultat='Non';
    }

    // affichage des predictions et du resultat
    document.write((i+1) +"-        <b>Entre  " + pluspetit + " et  " + plusgrand + "?</b>    " +
        "Votre paris était: <b>" + paris + "</b> Le résultat était:<b>" + tirage + "</b> La bonne réponse était " +
        "<b>"+ resultat +"</b><br>");
    // affichage des predictions et du resultat


    if (paris === resultat)
    {
        compteurPredictions++; // compteur de predictions correctes
    }
i++;

}

document.write("<br>Vous avez remporté <b>" + compteurPredictions + "</b> prédiction(s).");