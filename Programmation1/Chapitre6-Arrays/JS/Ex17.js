//Eric Martins - 11 janvier 2020
// Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.

var arr=[];
var i,j;
var temp;

for (i=0 ; i<5 ; i++) {
    arr[i] = Number(prompt(arr + "\nCompletez un tableau de 5 valeurs, entrez un nombre"));
}

document.write("Tableau pas trié<br>");
document.write(arr+"<br>");
document.write("Tableau en ordre décroissant<br>");


for (i=0 ; i<arr.length ; i++) {
    for (j=i+1 ; j<arr.length ; j++) {
        if (arr[j]>arr[i])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
document.write(arr+"<br>");
