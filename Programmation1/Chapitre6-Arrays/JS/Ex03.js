// Eric Martins - 09 janvier 2020
// Affichez les mois précédents de Décembre à Janvier.

var LesMois= new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
var i=0;

for ( i = LesMois.length-1 ; i >= 0 ; i--)
{
    document.write(LesMois[i]+"<br>")
}
