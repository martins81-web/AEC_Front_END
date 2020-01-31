// Eric Martins - 30 janvier 2020
// Créez un objet Guerrier qui possède 5 propriétés.
//     Les points de vie, la force, l’agilité, la chance et la précision.
//     La chance du guerrier est un nombre aléatoire de 0 à 1 qui doit être recalculée après chaque attaque.
//     Le guerrier possède la fonction Attaquer() qui retourne un nombre de points de dégâts = (force*précision+agilité)*chance
// Instanciez deux guerriers avec 100 points de vie,
//     random de 1 à 10 de force, d’endurance, de précision et d’agilité,
//     random de 0 à 1 de chance (ex 0.5 de chance fait frapper votre guerrier à 50% de sa puissance) N’oubliez pas que la chance doit être recalculée après chaque attaque.
//     Faites combattre vos deux guerriers jusqu’à la mort. et affichez les détails de votre combat.

class Guerrier{
    constructor(nom, pointsDeVie,force,agilite,chance,precision) {
       this.pointsDeVie = pointsDeVie;
       this.force = force;
       this.agilite = agilite;
       this.chance = chance;
       this.precision = precision;
       this.nom = nom;
    }

    Attaquer(){
        let degats = (this.force*this.precision+this.agilite)*this.chance;
        this.chance = Math.random();
        return degats;
    }
}

function Attack(guerrier1,guerrier2){
    if(guerrier1.pointsDeVie>0) {
        let degats=guerrier1.Attaquer();
        guerrier2.pointsDeVie-=degats;
        document.write("<b>"+ guerrier1.nom + " ====>> "+ guerrier2.nom +"</b><br>   " + degats.toFixed(0) + " points de dégats.<br>");
        if( guerrier2.pointsDeVie <=0 )
        {
            guerrier2.pointsDeVie=0;
            document.write("<b>"+guerrier1.nom+":</b> "+  guerrier1.pointsDeVie.toFixed(0) +" points de vie <br>");
            document.write("<b>"+guerrier2.nom+":</b> "+  guerrier2.pointsDeVie.toFixed(0) +" points de vie <br>");
            document.write("<font color=\"red\">"+guerrier2.nom+" est mort.</font>");
            document.write("<h2><font color=\"green\">"+guerrier1.nom+" est le vainqueur!</font></h2>");
        }
    }
    return true;
}

let guerrier1 = new Guerrier("Guerrier1",100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);
let guerrier2 = new Guerrier("Guerrier2",100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);

document.write("<h1><u>DUEL ENTRE GUERRIERS</u></h1>");

var i=1;

while(guerrier1.pointsDeVie > 0 && guerrier2.pointsDeVie > 0){

    document.write("<b>"+guerrier1.nom+"</b> "+  guerrier1.pointsDeVie.toFixed(0) +" points de vie<br>");
    document.write("<b>"+guerrier2.nom+"</b> "+  guerrier2.pointsDeVie.toFixed(0) +" points de vie<br>");
    document.write("______________________________________");
    document.write("<h4><u>Round " + i +"</u></h4>");
    document.write("<font color=\"red\">ATTAQUE:</font><br>");

    if(Boolean(Math.round(Math.random()))){
        Attack(guerrier1,guerrier2);
        Attack(guerrier2,guerrier1);
    }
    else{
        Attack(guerrier2,guerrier1);
        Attack(guerrier1,guerrier2);
    }

    i++;
}