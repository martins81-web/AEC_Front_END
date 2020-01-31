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
    constructor(pointsDeVie,force,agilite,chance,precision) {
       this.pointsDeVie = pointsDeVie;
       this.force = force;
       this.agilite = agilite;
       this.chance = chance;
       this.precision=precision;
    }

    Attaquer(){
        let degats = (this.force*this.precision+this.agilite)*this.chance;
        this.chance = Math.random();
        return degats;
    }
}

let guerrier1 = new Guerrier(100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);
let guerrier2 = new Guerrier(100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);

document.write("<h1><u>DUEL ENTRE GUERRIERS</u></h1>");
document.write("<b>Guerrier1:</b> "+  guerrier1.pointsDeVie +" points de vie<br>");
document.write("<b>Guerrier2:</b> "+  guerrier2.pointsDeVie +" points de vie<br>");

var i=1;

while(guerrier1.pointsDeVie > 0 && guerrier2.pointsDeVie > 0){
    document.write("______________________________________");
    document.write("<h4><u>Round " + i +"</u></h4>");

    if(guerrier1.pointsDeVie>0) {
        let degats=guerrier1.Attaquer();
        guerrier2.pointsDeVie-=degats;
        document.write("<b>Guerrier1 Attaque:</b> " + degats.toFixed(0) + " points de dégats.<br>");
        if( guerrier2.pointsDeVie <=0 )
        {
            guerrier2.pointsDeVie=0;
            document.write("<b>Guerrier2:</b> " + guerrier2.pointsDeVie.toFixed(0) + " points de vie.<br>");
            document.write("<h3><font color=\"red\">Guerrier2 est mort.</font></h3>");
            document.write("<h2><font color=\"green\">Guerrier1 est le vainqueur!</font></h2>");
        } else {
            document.write("<b>Guerrier2:</b> " + guerrier2.pointsDeVie.toFixed(0) + " points de vie.<br><br>");
        }

    }

    if(guerrier2.pointsDeVie>0) {
        let degats=guerrier2.Attaquer();
        guerrier1.pointsDeVie-=degats;
        document.write("<b>Guerrier2 Attaque:</b> " + degats.toFixed(0) + " points de dégats.<br>");
        if( guerrier1.pointsDeVie <=0 )
        {
            guerrier1.pointsDeVie=0;
            document.write("<b>Guerrier1:</b> " + guerrier1.pointsDeVie.toFixed(0) + " points de vie.<br>");
            document.write("<h3><font color=\"red\">Guerrier1 est mort.</font></h3>");
            document.write("<h2><font color=\"green\">Guerrier2 est le vainqueur!</font></h2>");
        } else {
            document.write("<b>Guerrier1:</b> " + guerrier1.pointsDeVie.toFixed(0) + " points de vie.<br>");
        }
    }
    i++;
}