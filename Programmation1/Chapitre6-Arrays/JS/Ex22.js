// Eric Martins - 16 janvier 2020
// 22 La Martingale
// http://fr.wikipedia.org/wiki/Martingale
//     Vous vous souvenez sûrement de la technique de la Martingale dont je vous avais parlé au premier cours. (Shany)
//
// Il s’agit de jouer à un jeu qui a 50 % des chances de gagner. Par exemple, la roulette ou le blackjack.
//
//     On mise 1$. Si on gagne, on obtient 1$ de profit.
//     Si on perd, on mise le double 2$. Si on gagne, on a encore 1$ de profit.
//     Si on perd, on mise le double...
//
// Je veux que vous testiez la technique de la Martingale en jouant jusqu’à ce que vous ayez empoché 1000 $.
//     Je veux savoir le montant maximal que vous avez dû mettre sur la table (le nombre de défaites consécutives).
// Suite à ces résultats, est-ce que vous investissez votre argent sur la Martingale?
//
//     Essayez d’ajouter une boucle qui teste la Martingale 1000 fois et affichez un tableau de statistiques quant au montant maximal sur la table…
// Pour tester la Martingale en action gratuitement avec des BitCoins 999dice.com


var mise=1;
var profit=0;
var roulette;
var compteur=1;
var maxMise=1;


while (profit < 1000){
    roulette = Boolean(Math.round(Math.random()));

    if (roulette === true){
        profit = profit + mise;
        document.write( "<b>Mise " + compteur + "</b>:  Argent misé: " + mise + "$ <font color=\"green\"> GAGNEZ </font>" +"  Profit Actuel: " + profit + "$<br>");
        mise=1;
    }
    else
    {
        profit = profit - mise;
        document.write( "<b>Mise " + compteur + "</b>:  Argent misé: " + mise + "$ <font color=\"red\"> PERDU </font>" +"  Profit Actuel: " + profit + "$<br>");
        mise *= 2;

        if (mise > maxMise) {
            maxMise = mise;
        }
    }

    compteur++;
}

document.write("<br>Le montant maximal mis sur la table était de <b>" + maxMise + "$.</b><br>");
document.write("Le nombre de mises consécutives que vous avez perdu a été de <b>" + Math.log2(maxMise) + ".</b><br>");