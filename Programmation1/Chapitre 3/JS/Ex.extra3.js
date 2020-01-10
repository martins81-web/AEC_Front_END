//Eric Martins - 19 décembre 2019
//lancement de 2 deés, aficher les résultats du total 2 à 12, le nombre de lancements est choisi par l'utilisateurs

document.write( "<h1>Lancements de deux dés</h1>")

var diceRoll1;
var diceRoll2;
var lancements;
var totalDiceRolls;
var results = new Array(13).fill(0);
var i;

lancements = Number ( prompt ("Combien de lancements de 2 dés voulais vous faire?"));
document.write('<img src="https://www.virtualdiceroll.com/imagini/about.jpg" alt="dice"> <br>');
document.write( "<br> En <b>" + lancements + "</b> lancements de deux dés. <br><br>");

for ( ; lancements > 0 ; lancements-- )
{
    diceRoll1 = Math.floor( Math.random() * 6 ) +1;
    diceRoll2 = Math.floor( Math.random() * 6 ) +1;
    totalDiceRolls = diceRoll1 + diceRoll2 ;
    results[totalDiceRolls] ++;
}

for ( i = 2 ; i <= 12 ; i++ )
{
    document.write( "Le <b>" + i + "</b> a sorti <b>" + results[i] + "</b> fois. <br>")
}