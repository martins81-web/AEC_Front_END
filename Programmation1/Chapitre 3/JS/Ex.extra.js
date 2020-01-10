//Eric Martins - 17 décembre 2019
//Compute the greatest common divisor (GCD) of two positive integers

var int1;
var int2;

var GCD=0;
var plusPetit;

int1 = Number(prompt("Entrez un nombre entier"));
int2 = Number(prompt("Entrez un autre nombre entier"));

if ( Number.isInteger(int2) === false || Number.isInteger(int1) === false )
{
    GCD="Vous n'avez pas entré un entier.";
}
else if (int1 > int2)
{
    plusPetit = int2;
}
else
{
    plusPetit = int1;
}


// calcul GCD
for ( i = 0 ; i <= plusPetit ; i++)
{
    if ( int1 % i  === 0 && int2 % i  === 0)
    {
        GCD = i;
    }
}

document.write(GCD);