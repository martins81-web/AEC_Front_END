// Eric Martins - 09 janvier 2020
// À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
//     Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.
//
//     Calculez la plus longue séquence de vrais et de faux consécutifs.
//
// Plus longue séquence de vrais consécutifs : 3
// Plus longue séquence de faux consécutifs  : 4
//
// Donnez aussi la position de départ de chacune des séquences :
//     Position de départ de la plus longue séquence de vrais consécutifs : 6
// Position de départ de la plus longue séquence de faux consécutifs  : 12

var bool= new Array();
var CompteurVrai=1;
var CompteurFaux=1;
var SequenceVrai=0;
var SequenceFaux=0;
var PositionDepartVrai=0;
var PositionDepartFaux=0;

for (var i=0;i<100;i++)
{

    bool[i] = Boolean(Math.round(Math.random()));

    if (bool[i]===bool[i-1])
    {
        if (bool[i]===true)
        {
            CompteurVrai++;
            if (CompteurVrai > SequenceVrai)
            {
                SequenceVrai=CompteurVrai;
                PositionDepartVrai = (i+1) - SequenceVrai ;
            }

        }
        else
        {
            CompteurFaux++;
            if (CompteurFaux > SequenceFaux)
            {
                SequenceFaux = CompteurFaux;
                PositionDepartFaux = (i+1) - SequenceFaux ;
            }
        }
    }
    else
    {
        CompteurVrai=1;
        CompteurFaux=1;
    }

    document.write( i+": " + bool[i]+"<br>");
}

document.write("<br>");
document.write("Plus longue séquence de vrais consécutifs: " + SequenceVrai + "<br>");
document.write("Plus longue séquence de faux consécutifs: " + SequenceFaux + "<br>");
document.write("Position de départ de la plus longue séquence de vrais consécutifs: " + PositionDepartVrai + "<br>");
document.write("Position de départ de la plus longue séquence de faux consécutifs: " + PositionDepartFaux + "<br>");