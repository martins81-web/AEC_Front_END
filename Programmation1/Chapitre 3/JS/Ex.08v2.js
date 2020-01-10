// Eric Martins - 13 décembre 2019
// Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))

var tempEnF = -40;

while ( tempEnF <= 40)
{
    document.write(tempEnF + " degrés Fahrenheit = " +  (5 / 9 * (tempEnF - 32)).toFixed(2)  + " celsius.<br>");
    tempEnF += 5;
}