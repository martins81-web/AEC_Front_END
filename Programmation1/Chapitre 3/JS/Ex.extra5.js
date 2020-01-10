//Eric Martins - 19 décembre 2019
//lancement des 6 dés jusqu'a ils affichent le bon resultat 1,2,3,4,5,6

document.write( "<h1>Lancement de dés</h1>");

var diceRoll=0;
var diceNumber;

for ( diceNumber = 1 ; diceNumber <= 6; diceNumber++ )
{
    while ( diceRoll !== diceNumber)
    {
        diceRoll = Math.floor(Math.random() * 6) + 1;
    }
    document.write('<img src="Images/Dice-1_' + diceRoll.toString() + '.png" width="250" height="250" alt="dices">');
}

