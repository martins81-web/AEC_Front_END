//Eric Martins - 19 décembre 2019
//lancement de 2 deés, afficher le resultat en image

document.write( "<h1>Lancement de deux dés</h1>");

var diceRoll;
var diceNumber;

for ( diceNumber = 1 ; diceNumber <= 2; diceNumber++ )
{
    diceRoll = Math.floor( Math.random() * 6 ) + 1;
    document.write( '<img src="Images/Dice-' + diceNumber.toString() + '_' + diceRoll.toString() + '.png" width="250" height="250" alt="dices">' );
}


