// Eric Martins - 14 novembre 2019
//2. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

//déclaration des variables
var A, B, C, PlusGrand, PlusPetit;

//lecture des variables
A=Number(prompt("Entrez 3 nombres différents, entrez le premier maintenant"));
B=Number(prompt("Entrez le deuxieme"));
C=Number(prompt("Entrez le troisième"));

//cycle if
if ( A === B  || B === C || C === A)
    {
        document.write("Les nombres ne sont pas tous différents!");
    }
else if ( A > B)
    {
        PlusGrand=A;
        PlusPetit=B;

        if ( C < B )
            PlusPetit=C;
        else if ( C > A)
            PlusGrand=C;

        document.write("Le nombre plus grand est: " + PlusGrand + " et le plus petit est: "+ PlusPetit);
    }
else if ( A < B)
    {
        PlusGrand=B;
        PlusPetit=A;

        if ( C < A)
            PlusPetit=C;
        else if ( C > B)
            PlusGrand=C;

        document.write("Le nombre plus grand est: " + PlusGrand + " et le plus petit est: "+ PlusPetit);
    }



