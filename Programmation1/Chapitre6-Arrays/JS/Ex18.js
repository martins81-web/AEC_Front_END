//Eric Martins - 11 janvier 2020
// Lire 10 noms et afficher en ordre alphabétique selon la 1ere lettre uniquement.
//     Indices :
// var texte1 = “Shany”
// var texte2 = “Carle”
// console.log(texte1[0] < texte2[0]);
// Va afficher false car ‘S’ n’est pas plus petit que ‘C’
//
// tabMots[0] = "shany";
// console.log(tabMots[0][1]); //Affiche le caractère h

var noms = [];
var i;
var temp;

for (i=0 ; i<10 ; i++)
{
    noms[i]=prompt(noms+"\nEntrez des noms:")
}

document.write("<b>Noms pas triés</b><br><br>");
for (i=0 ; i<10 ; i++)
{
    document.write(noms[i]+"<br>");
}

for (i=0 ; i<noms.length ; i++) {
    for (j=i+1 ; j<noms.length ; j++) {
        if (noms[j][0]<noms[i][0])
        {
            temp=noms[i];
            noms[i]=noms[j];
            noms[j]=temp;
        }
    }
}

document.write("<br><br><b>Noms par ordre alphabétique selon la 1ere lettre</b><br><br>");
for (i=0 ; i<10 ; i++)
{
    document.write(noms[i]+"<br>");
}
