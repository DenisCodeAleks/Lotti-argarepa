const spielernamen = ["denis", "schram", "stank", "stefan"];
let spieler = {};
let felder = 30; 
let spieleranzahl = 4;
let i = -1;

function setup () {

createCanvas(800, 600);
background (0, 100, 255);
}

function draw() {   

}



function keyPressed(){
    if (keyCode === UP_ARROW){
        if (i == (spieleranzahl-1)){
            i = -1;
        }
        i++; 
        //console.log("i = " + i);
    };     
    drawPlayer();
};


function drawPlayer(){
    

    let aktuelle_position = spieler[i]["pos"];
    
    if (i < spieleranzahl){

        let wuerfelzahl = Math.floor(Math.random() * 3);
        let neue_position = aktuelle_position + wuerfelzahl
        console.log("Würfelzahl:"+wuerfelzahl+" | Position:"+aktuelle_position+" --> "+neue_position)
        aktuelle_position = neue_position
    
    }
    else{
        i = 0;
        drawPlayer();
    }

        spieler[i]={
        "spielername": spielernamen[i],
        "pos":  aktuelle_position//Math.floor(Math.random() * 3)
        };

        console.log(spieler[i]);
    
}


spieler[0] ={
    "pos" : 0
}
spieler[1] ={
    "pos" : 0
}
spieler[2] ={
    "pos" : 0
}
spieler[3] ={
    "pos" : 0
}
   

