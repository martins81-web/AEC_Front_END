//Eric Martins - 12 décembre 2019
//Lire une string, écrire le mot à l'envers. Patate devient etataP
//             Indice :  mot[0] donne 'P'
//             Indice : mot.length donne 6

var string;
var i;

string = prompt("Ecrivez un mot");
for ( i=0 ; i< string.length ; i++ )
{
    document.write(string[i] + " | " + string[string.length-1-i] + "<br>");
}

