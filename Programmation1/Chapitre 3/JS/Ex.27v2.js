//Eric Martins - 17 décembre 2019
//Lire une string, écrire le mot à l'envers. Patate devient etataP
//             Indice :  mot[0] donne 'P'
//             Indice : mot.length donne 6

var string;
var i=0;

string = prompt("Ecrivez un mot");
while ( i < string.length )
{
    document.write(string[i] + " | " + string[string.length-1-i] + "<br>");
    i++;
}

