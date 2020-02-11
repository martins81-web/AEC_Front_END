/*<!-- Q3.js -->*/
/*<!-- Programmation1 -->*/
/*<!-- Examen formative 2 par Eric Martins -->*/
/*<!-- Crée le 06 février 2020 -->*/

// Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
// Demandez un nombre à l’usager entre 1 et 200. (1 point)
// Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager.

var tabChance=[];

for (let i=0 ;i<200;i++){
    tabChance[i]=Math.floor(Math.random() * 200) + 1;
}

var nombre;
var estDansLeTableau=false;
nombre=Number(prompt("Entrez un nombre entre 1 et 200"));

for (let i=0; i<tabChance.length;i++){
    if (nombre===tabChance[i])
    {
        estDansLeTableau=true;
    }
}

if (nombre>=1 && nombre<=200){
    if (estDansLeTableau){
        document.write("Le nombre est dans le tableau.");
    }
    else {
        document.write("Le nombre n'est pas dans le tableau.");
    }
}