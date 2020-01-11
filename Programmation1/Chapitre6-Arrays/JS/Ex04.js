// Eric Martins - 09 janvier 2020
// Créez un tableau nommé tab2Exp avec 16 cases entières. À l’aide d’une boucle, insérez les bonnes valeurs dans le tableau.
//     exp : tab2Exp[0] = 1;    // 2^0
// ...
// exp : tab2Exp[4] = 16;  // 2^4
// exp : tab2Exp[5] = 32;  // 2^5

var tab2Exp = [];
var i;

for ( i = 0 ; i < 16 ; i++ )
{
    tab2Exp[i] = Math.pow(2,i);
    document.write("2^"+i+" = "+tab2Exp[i]+ "<br>")
}
