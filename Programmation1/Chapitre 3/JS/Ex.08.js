// Eric Martins - 12 décembre 2019
// Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))

var tempEnF;

for ( tempEnF = -40 ; tempEnF <= 40 ; tempEnF += 5)
{
    console.log( tempEnF + " degrés Fahrenheit = " + 5/9*(tempEnF-32) + " celsius.");
}