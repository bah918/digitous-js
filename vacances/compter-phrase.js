//## 02 - Compter les voyelles

function compterV(Voyelle){
    var i = 0; var tab = Voyelle.split(''); var nou = "";
    console.log(tab);
    while(i <= tab.length-1){
        if(tab[i]==="e"||tab[i]==="o"||tab[i]==="u"||tab[i]==="i"||tab[i]==="a"||tab[i]==="y"){
                    nou = nou + tab[i];
                    
        }
        i++;
    }
    console.log(nou);
}
compterV("mamehio");


//03 - Langage codé

function secretCode(string){
    var tab =["vide","a","b","c","d","e","f","g","h","i","j","k","l","m",
             "n","o","p","q","r","s","t","u","v","w","x","y","z",];
             var tabstring = string.split(""); var t = 0;
             var nou = "";
             while(t <= tabstring.length-1){
                 var i = 0;
                 while(i <= tab.length-1){
                     if(tab[i]===tabstring[t]){
                         
                        nou = nou + (i+10);
                        t++;
                     }
                     i++;
                 }
            }
            console.log(nou);
}
secretCode("secret");



//04- Répertoire musical

chanson1={
    titre:"Parlez-moi de lui",
    artiste:"Nicole Croisille",
    année:"1988"
}
chanson2={
    titre:"Tout chamboulé",
    artiste:"Angele",
    année:"2018"
}
chanson3={
    titre:"i have nothing ",
    artiste:"whitney houston",
    année:"1993"
}
musique=["chanson1","chanson2","chanson3"];

console.log("la valeur title de song1 est :");
console.log(chanson1.titre);

console.log("la valeur artist de song3 est :");
console.log(chanson3.artiste);

console.log("la valeur year de song2.est :");
console.log(chanson2.année);


// 05 habiller des personnes

var clothes = ["chemise", "pantalon", "veste", "chaussures"];
var colors = ["bleu", "rouge", "vert", "jaune"];

var shelves = []; var tab1 = []; 

//01/ function displayOnShelves
console.log("3 function displayOnShelves :");

function displayOnShelves(clothes, colors){
     var i = 0; var t = 0;
     while(t <= clothes.length-1){
         while(i <= colors.length-1){
             tab1[i]=`<< ${clothes[t]} ${colors[i]} >>`;
             i++;
         }
         shelves[t] = tab1;
         t++; i = 0;
         tab1=[];
     }
     console.log(shelves);

}
displayOnShelves(clothes, colors);
console.log(shelves);



// Math.floor(Math.random() * (max - min) ) + min
//03/ function getDressed 
console.log("3 function getDressed :");
function getDressed(shelves){
    var nou = 0; var tab =[]; var select = []; var i = 0; var t = 0;
    var nouv = [];
    while(i <= shelves.length-1){
       var nou= Math.floor(Math.random()*(shelves.length-1-0+1) + 0);

        tab=shelves[nou];  
        nou=Math.floor(Math.random()*(tab.length-1-0+1) + 0); 
        
         nouv =tab[nou];
         nouv = nouv.toString();
         nouv = nouv.substring(2, nouv.length-2);
         select=nouv.toString();
         select=select.split(" ");
         nouv=select.shift();
         nouv=select.pop();
         nouv=select.toString();
         console.log(nouv);
         
       
        i++;  
       
             
    }
    console.log(select);
}
getDressed(shelves);

//const str = 'The quick brown fox jumps over the lazy dog.';
//const words = str.split();
//console.log(words[3]);
//console.log(words);
