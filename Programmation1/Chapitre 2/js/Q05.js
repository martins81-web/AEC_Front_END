// Eric Martins - 14 novembre 2019
//5.  Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

//déclaration des variables
var temperature;

//lecture des variables
temperature=Number(prompt("Entrez degré de température"));

//cicle if pour vérifier si on a une belle journée
if ( temperature <= -10 && temperature >= -40)
    {
        document.write("HAAAAAAAAA! Il fait froid");
    }
else if (temperature <- 40)
    {
        document.write("C'est pas humain!");
    }
else
    {
        document.write("Enfin une belle journée!");
    }

