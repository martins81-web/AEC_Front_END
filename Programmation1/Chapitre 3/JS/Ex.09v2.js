// Eric Martins - 13 décembre 2019
//Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.


var tempEnF=10;

while( tempEnF <= 20)
{
    document.write( tempEnF + " degrés Fahrenheit = " + (5/9*(tempEnF-32)).toFixed(2) + " celsius.<br>");
    tempEnF++;
}