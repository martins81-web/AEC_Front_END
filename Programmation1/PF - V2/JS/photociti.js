

class caractere{
    constructor(char) {
        this.char = char;
    }

    UrlRandom() {
        let random = Math.floor(Math.random() * 5) + 1;
        if (this.char==='*'){
            return "Letters/CS/CS"+random+".jpg";
        } else {
            return "Letters/"+this.char+"/"+this.char+random+".jpg";
        }
    }
}

var char=[];
for(let i=0;i<=26;i++){
    if(i===0) {
        char[i] = new caractere(String.fromCharCode( 42));
    } else {
        char[i] = new caractere(String.fromCharCode( 65 + i - 1));
    }
}



