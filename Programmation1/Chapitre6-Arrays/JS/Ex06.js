// Eric Martins - 09 janvier 2020
// Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs à l’aide d’une boucle Pour.

var coin = new Array();
var choix;
var i;

for ( i = 0 ; i < 10 ; i++ )
{
    choix = Number (  prompt("Choisissez:\n1: Pile\n2: Face"));
    while (choix !== 1 && choix !== 2)
    {
        choix = Number (  prompt("Choix invalide!!!\nChoisissez encore:\n1: Pile\n2: Face"));
    }

    if (choix === 1)
    {
        coin[i]="Pile";
    }
    else if (choix === 2)
    {
        coin[i]="Face";
    }
    document.write((i+1)+": "+ coin[i]+"<br>");
}