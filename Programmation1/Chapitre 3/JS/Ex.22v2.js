// Eric Martins - 12 décembre 2019
// Faites affichez :
//
//     [0,0] [0,1] [0,2] [0,3] [0,4] [0,5]
//     [1,0] [1,1] [1,2] [1,3] [1,4] [1,5]
//     [2,0] [2,1] [2,2] [2,3] [2,4] [2,5]
//     [3,0] [3,1] [3,2] [3,3] [3,4] [3,5]

var i=0;
var j;


while ( i <= 3  )
{
    j=0;
    while ( j <= 5 )
    {
        document.write("[" + i + "," + j + "] ");
        j++;
    }
    document.write("<br>");
    i++;
}

