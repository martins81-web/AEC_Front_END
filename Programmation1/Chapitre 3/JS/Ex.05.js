// Eric Martins - 12 décembre 2019
// Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.

var i;
var nb;
var nbZero=0;
var nbUn=0;

for ( i = 0 ; i < 100 ; i++)
{
    nb = Math.floor(Math.random()*2);
    document.write(nb+"<br>");
    if (nb === 0)
    {
        nbZero++;
    }
    else
    {
        nbUn++;
    }
}

document.write("Le número 0 a sorti " + nbZero + " fois.");
document.write("<br>");
document.write("Le número 1 a sorti " + nbUn + " fois.");