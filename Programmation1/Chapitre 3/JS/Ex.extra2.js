//Eric Martins - 17 décembre 2019
// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

i=1;

while (i<=100)
{
    if ( i%3 === 0  && i%5 === 0)
    {
        document.write("FizzBuzz<br>");
    }
    else if ( i%3 === 0 )
    {
        document.write("Fizz<br>");
    }
    else if ( i%5 === 0 )
    {
        document.write("Buzz<br>");
    }
    else
    {
        document.write(i + "<br>");
    }

    i++;
}