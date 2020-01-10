// Eric Martins - 13 décembre 2019
// Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.

var i=0;
var nb;
var nbZero=0;
var nbUn=0;

while (i<100)
{
    nb = Math.round(Math.random());
    document.write(nb + "<br>");

    if (nb === 0)
    {
        nbZero++;
    }
    else
    {
        nbUn++;
    }

    i++;
}

document.write("Le número 0 a sorti " + nbZero + " fois.<br>");
document.write("Le número 1 a sorti " + nbUn + " fois.");