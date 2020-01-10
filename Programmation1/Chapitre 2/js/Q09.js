// Eric Martins - 14 novembre 2019
//9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant :
// « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide »

//déclaration des variables
var username, pass;

//lecture des variables
username=prompt("Entrez votre nom d’utilisateur");
pass=prompt("Entrez votre mot de passe")

// if pour verifier si le utilisateur est vraiment l'admin
if ( "admin" === username && "12345" === pass)
    {
        document.write("Bonjour "+ username);
    }
    else
        document.write("Votre nom d’utilisateur ou votre mot de passe est invalide");