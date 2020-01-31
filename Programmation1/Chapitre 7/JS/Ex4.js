// Eric Martins - 30 janvier 2020
// Créez un objet Guerrier qui possède 5 propriétés.
//     Les points de vie, la force, l’agilité, la chance et la précision.
//     La chance du guerrier est un nombre aléatoire de 0 à 1 qui doit être recalculée après chaque attaque.
//     Le guerrier possède la fonction Attaquer() qui retourne un nombre de points de dégâts = (force*précision+agilité)*chance
// Instanciez deux guerriers avec 100 points de vie,
//     random de 1 à 10 de force, d’endurance, de précision et d’agilité,
//     random de 0 à 1 de chance (ex 0.5 de chance fait frapper votre guerrier à 50% de sa puissance) N’oubliez pas que la chance doit être recalculée après chaque attaque.
//     Faites combattre vos deux guerriers jusqu’à la mort. et affichez les détails de votre combat.


//----------------------------classes---------------------------------------//

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

//Class pour le duel et son affichage
class Duel{
    constructor(guerrier1, guerrier2) {
        this.guerrier1 = guerrier1;
        this.guerrier2 = guerrier2;
    }

    TillDeath(){  //methode qui initie le duel
        document.write("<h1><u>DUEL ENTRE GUERRIERS</u></h1>");
        let i=1;

        while(this.guerrier1.pointsDeVie > 0 && this.guerrier2.pointsDeVie > 0){
            this.GetEtat();
            // document.write("__________________________________________________");
            // document.write("<h4><u>Round " + i +"</u></h4>");

            document.write("<br><font color=\"red\">ATTAQUE:</font><br>");
            //random qui determine quel des guerriers attaque
            if(Boolean(Math.round(Math.random()))){
                this.Attack(this.guerrier1, this.guerrier2);
            }
            else{
                this.Attack(this.guerrier2, this.guerrier1);
            }

            i++;
        }
    }

    Attack(guerrierQuiAttaque,guerrierQuiDefends){   //Méthode qui apelle les attaques d'un guerrier envers l'autre
            let degats = guerrierQuiAttaque.Attaquer();
            degats= Math.round(degats);
            guerrierQuiDefends.pointsDeVie -= degats;

            document.write("<b>"+ guerrierQuiAttaque.nom + " === </b>"+  degats + " points de dégats" + "<b> ===>> "+ guerrierQuiDefends.nom +"</b>    <br>");

            if(this.DuelFini()) {   // verifie si le duel est terminé apres la mort de un des guerriers
                this.AffichageFinal();  //appel du méthode qui affiche la fin du duel
            }
        return true;
    }

    //retourne true si un des guerrier est mort
    DuelFini(){
        if (this.guerrier1.pointsDeVie <= 0 ) {
            this.guerrier1.pointsDeVie = 0;
            return true;
        }
        else if (this.guerrier2.pointsDeVie <= 0 ) {
            this.guerrier2.pointsDeVie = 0;
            return true;
        }
        else{
            return false;
        }
    }

    GetEtat() {  //affiche les points de vie
        document.write("<br><font color=\"green\">ÉTAT DE VIE:</font><br>");
        document.write("<b>"+this.guerrier1.nom+"</b> "+  this.guerrier1.pointsDeVie +" points de vie<br>");
        document.write("<b>"+this.guerrier2.nom+"</b> "+  this.guerrier2.pointsDeVie +" points de vie<br>");
        return true;
    }

    AffichageFinal(){   //affichage qd le duel est fini
        this.GetEtat();
            let guerrierMort;
            let guerrierVainqueur;
            if (this.guerrier1.pointsDeVie === 0){
                guerrierMort=this.guerrier1;
                guerrierVainqueur=this.guerrier2;
            }
            else {
                guerrierMort=this.guerrier2;
                guerrierVainqueur=this.guerrier1;
            }
            document.write("__________________________________________________<br>");
            document.write("<br><b>" + guerrierMort.nom + "</b> est <font color=\"red\">MORT.</font> <br>");
            document.write("<b>" + guerrierVainqueur.nom + "</b> est le <font color=\"green\">VAINQUEUR </font> du duel!");
    }
}
//-----------------------fin des classes-----------------------------------------------//



// Instanciation des guerriers
let Leonidas = new Guerrier("Leonidas",100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);
let Spartacus = new Guerrier("Spartacus",100,Math.random()*9+1,Math.random()*9+1, Math.random(),Math.random()*9+1);

// Instanciation du duel entre les guerriers
let duel1 = new Duel(Leonidas,Spartacus);

//duel
duel1.TillDeath();