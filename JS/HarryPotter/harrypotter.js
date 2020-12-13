
function sortiranje(){ //kad se klikne na dugme da izađe šešir i da nestane pismo
    let pismo = document.getElementById("pismo");
    pismo.style.display ="none";

    let sortiranje = document.getElementById("sortiranje");
    sortiranje.style.display = "flex";
}


//brojaci poena za kuce, u kucu koja ima najvise poena na kraju biva smesten igrac
var gryffindorpts = 0;
var slytherinpts = 0;
var hufflepuffpts = 0;
var ravenclawpts = 0;

function ispisiPoene(){ //metoda da se prate poeni kad se programira
    console.log(gryffindorpts);
    console.log(slytherinpts);
    console.log(hufflepuffpts);
    console.log(ravenclawpts);
}

var pocetakkviza = new Date(); //kao deklaracija vremena

function start(){ //započinje kviz

    pocetakkviza = new Date(); // dodela vrednosti kad se pocne kviz

    let startTekstIDugme = document.getElementById("start"); 
    startTekstIDugme.style.display = "none";

    let odgPotvrda = false; //izlazi onaj confirm box da se klikne OK da pocinje kviz
    odgPotvrda = confirm("Da li ste sigurni?");
    
    if(odgPotvrda==true){ //ako se klikne OK izlaze pitanja
        pitanja();        
    }
}

function pitanja(){ 

    let kuce = document.getElementById("kuce");
    kuce.style.display="none";

    alert("Kliknite na OK i počnite da odgovarate na pitanja koja su se pojavila dole."); //izlazi alert bezveze

    let pitanja = document.getElementById("pitanja"); //izlazepitanja postavlja se flex column
    pitanja.style.display = "flex";
    pitanja.style.flexDirection = "column";
}

var odg1 = false;
var odg2 = false;
var odg3 = false;
var odg4 = false;
var odg5 = false;
var odg6 = false;
var odg7 = false;


//pitanja rade tako sto svaki pojedinacan odgovor nosi odredjene brojeve poena za svaku kucu
//kad se da odgovor klikne pitanje nestaje

//pitanje 1 radite tokom slobodnog vremena?

function dugme11(){//trazim magijska stvorenja u zamku i duhove
    gryffindorpts+=10;
    slytherinpts+=0;
    hufflepuffpts+=50;
    ravenclawpts+=40;
    ispisiPoene();
    pitanje1nestaje();
}
function dugme12(){//ucim i usavrsavam svoje vestine
    gryffindorpts+=20;
    slytherinpts+=30;
    hufflepuffpts+=0;
    ravenclawpts+=50;
    ispisiPoene();
    pitanje1nestaje();
}
function dugme13(){//istrazujem sve delove zamka, i zabranjene
    gryffindorpts+=50;
    slytherinpts+=40;
    hufflepuffpts+=0;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje1nestaje();
}
function dugme14(){// druzim se sa drugima iz svoje kuce
    gryffindorpts+=20;
    slytherinpts+=30;
    hufflepuffpts+=50;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje1nestaje();
}
function pitanje1nestaje(){
    let pitanje1 = document.getElementById("pitanje1");
    pitanje1.style.display = "none";
    odg1 = true;
}

//pitanje 2 napitak

function dugme21(){// veritaserum
    gryffindorpts+=20;
    slytherinpts+=20;
    hufflepuffpts+=10;
    ravenclawpts+=30;
    ispisiPoene();
    pitanje2nestaje();
}
function dugme22(){// visesokovni
    gryffindorpts+=20;
    slytherinpts+=20;
    hufflepuffpts+=0;
    ravenclawpts+=50;
    ispisiPoene();
    pitanje2nestaje();
}
function dugme23(){// vigenveld
    gryffindorpts+=40;
    slytherinpts+=0;
    hufflepuffpts+=60;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje2nestaje();
}
function dugme24(){// amortentia
    gryffindorpts+=20;
    slytherinpts+=60;
    hufflepuffpts+=0;
    ravenclawpts+=20;
    ispisiPoene();
    pitanje2nestaje();
}
function pitanje2nestaje(){
    let pitanje2 = document.getElementById("pitanje2");
    pitanje2.style.display = "none";
    odg2 = true;
}

//pitanje 3 knjiga

function dugme31(){// hogvorts istorija
    gryffindorpts+=10;
    slytherinpts+=10;
    hufflepuffpts+=10;
    ravenclawpts+=50;
    ispisiPoene();
    pitanje3nestaje();
}
function dugme32(){// kvidic kroz epohe
    gryffindorpts+=50;
    slytherinpts+=30;
    hufflepuffpts+=20;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje3nestaje();
}
function dugme33(){// fantasticne zveri
    gryffindorpts+=20;
    slytherinpts+=10;
    hufflepuffpts+=60;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje3nestaje();
}
function dugme34(){//zivot i lazi dumbldora
    gryffindorpts+=20;
    slytherinpts+=50;
    hufflepuffpts+=10;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje3nestaje();
}
function pitanje3nestaje(){
    let pitanje3 = document.getElementById("pitanje3");
    pitanje3.style.display = "none";
    odg3 = true;
}

//pitanje 4 izborni predmet

function dugme41(){// stvorenja
    gryffindorpts+=40;
    slytherinpts+=30;
    hufflepuffpts+=40;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje4nestaje();
}
function dugme42(){// aritmantija
    gryffindorpts+=0;
    slytherinpts+=30;
    hufflepuffpts+=10;
    ravenclawpts+=50;
    ispisiPoene();
    pitanje4nestaje();
}
function dugme43(){// drevne rune
    gryffindorpts+=10;
    slytherinpts+=40;
    hufflepuffpts+=20;
    ravenclawpts+=30;
    ispisiPoene();
    pitanje4nestaje();
}
function dugme44(){// proucavanje normalaca
    gryffindorpts+=50;
    slytherinpts+=0;
    hufflepuffpts+=30;
    ravenclawpts+=20;
    ispisiPoene();
    pitanje4nestaje();
}
function pitanje4nestaje(){
    let pitanje4 = document.getElementById("pitanje4");
    pitanje4.style.display = "none";
    odg4 = true;
}

//pitanje 5 posao

function dugme51(){// auror
    gryffindorpts+=60;
    slytherinpts+=10;
    hufflepuffpts+=20;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje5nestaje();
}
function dugme52(){// ministar
    gryffindorpts+=30;
    slytherinpts+=60;
    hufflepuffpts+=0;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje5nestaje();
}
function dugme53(){// profesor
    gryffindorpts+=10;
    slytherinpts+=20;
    hufflepuffpts+=20;
    ravenclawpts+=60;
    ispisiPoene();
    pitanje5nestaje();
}
function dugme54(){// magizoolog
    gryffindorpts+=0;
    slytherinpts+=10;
    hufflepuffpts+=60;
    ravenclawpts+=30;
    ispisiPoene();
    pitanje5nestaje();
}
function pitanje5nestaje(){
    let pitanje5 = document.getElementById("pitanje5");
    pitanje5.style.display = "none";
    odg5 = true;
}

//pitanje 6 magije

function dugme61(){//legilemns
    gryffindorpts+=0;
    slytherinpts+=30;
    hufflepuffpts+=0;
    ravenclawpts+=70;
    ispisiPoene();
    pitanje6nestaje();
}
function dugme62(){//mracne vestine
    gryffindorpts+=0;
    slytherinpts+=70;
    hufflepuffpts+=0;
    ravenclawpts+=30;
    ispisiPoene();
    pitanje6nestaje();
}
function dugme63(){//lecenje
    gryffindorpts+=30;
    slytherinpts+=0;
    hufflepuffpts+=70;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje6nestaje();
}
function dugme64(){//zatitne cini
    gryffindorpts+=70;
    slytherinpts+=0;
    hufflepuffpts+=30;
    ravenclawpts+=0;
    ispisiPoene();
    pitanje6nestaje();
}
function pitanje6nestaje(){
    let pitanje6 = document.getElementById("pitanje6");
    pitanje6.style.display = "none";
    odg6 = true;
}

//pitanje 7 koju biste kucu vi hteli

function dugme71(){// grif
    gryffindorpts+=70;
    slytherinpts+=10;
    hufflepuffpts+=10;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje7nestaje();
}
function dugme72(){//slit
    gryffindorpts+=10;
    slytherinpts+=70;
    hufflepuffpts+=10;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje7nestaje();
}
function dugme73(){//haf
    gryffindorpts+=10;
    slytherinpts+=10;
    hufflepuffpts+=70;
    ravenclawpts+=10;
    ispisiPoene();
    pitanje7nestaje();
}
function dugme74(){//rev
    gryffindorpts+=10;
    slytherinpts+=10;
    hufflepuffpts+=10;
    ravenclawpts+=70;
    ispisiPoene();
    pitanje7nestaje();
}
function pitanje7nestaje(){
    let pitanje7 = document.getElementById("pitanje7");
    pitanje7.style.display = "none";
    odg7 = true;
}


//kraj
var krajkviza = new Date(); //kao deklaracija
var razlika = 0; //ovde ce da racuna razliku od kad smo poceli kviz do kad smo ga uradili

function kraj(){ //kad se klikne na dugme na kraju kviza poziva se ova fja

    if(odg1==false || odg2 == false || odg3 == false || odg4 == false || odg5 == false || odg6 ==false || odg7 == false){
        alert("Molimo Vas da odgovorite na svako pitanje.");
        return;
    }

    krajkviza = new Date(); //belezi kad se zavrsio kviz
    razlika = krajkviza.getTime() - pocetakkviza.getTime(); //ovde se racuna razlika

    let sortiranje = document.getElementById("sortiranje"); 
    sortiranje.style.display = "none"; //sakrkiva sve sto je imalo veze sa sortiranjem

    //kod koji racuna maksimalan broj poena

    let niz = [gryffindorpts, slytherinpts, hufflepuffpts, ravenclawpts];
    let maxpts = niz[0];
    let i=0;
    for(i=1;i<4;i++){
        if(maxpts<niz[i]){
            maxpts=niz[i];
        }
    }
    
    //gleda koja kuca ima taj maksimalan broj poena

    let maxi=0;
    for(i=0;i<4;i++){
        if(maxpts==niz[i]){
            maxi = i;
            break;
        }
    }


    //poziva metodu u zavisnosti od toga koja je je kuca max

    if(maxi == 0){
        sortiranG();
    } else
    if(maxi == 1){
        sortiranS();
    } else
    if(maxi == 2){
        sortiranH();
    } else
    if(maxi == 3){
        sortiranR();
    }
}

//ovde su sve metode kad je neko sortiran u neku kucu i sve rade isto, izbacuju welcome div i menjaju boju
//#levo i #desno divova u boje kuce

function sortiranG(){
    console.log("GRYFFINDOR");
    let gryffindorWelcome = document.getElementById("gryffindorWelcome");
    gryffindorWelcome.style.display = "flex";
    var levo = document.getElementById("levo");
    levo.style.backgroundColor = "crimson";
    var desno = document.getElementById("desno");
    desno.style.backgroundColor = "crimson";
}

function sortiranS(){
    console.log("SLYTHERIN");
    let gryffindorWelcome = document.getElementById("slytherinWelcome");
    gryffindorWelcome.style.display = "flex";
    var levo = document.getElementById("levo");
    levo.style.backgroundColor = "SeaGreen";
    var desno = document.getElementById("desno");
    desno.style.backgroundColor = "SeaGreen";
}
function sortiranH(){
    console.log("HUFFLEPUFF");
    let gryffindorWelcome = document.getElementById("hufflepuffWelcome");
    gryffindorWelcome.style.display = "flex";
    var levo = document.getElementById("levo");
    levo.style.backgroundColor = "GoldenRod";
    var desno = document.getElementById("desno");
    desno.style.backgroundColor = "GoldenRod";
}
function sortiranR(){
    console.log("RAVENCLAW");
    let gryffindorWelcome = document.getElementById("ravenclawWelcome");
    gryffindorWelcome.style.display = "flex";
    var levo = document.getElementById("levo");
    levo.style.backgroundColor = "SteelBlue";
    var desno = document.getElementById("desno");
    desno.style.backgroundColor = "SteelBlue";
}


//ovo je sad jquery koji appenduje dole ispod kviza koliko sekundi je neko radio kviz, i ono vreme od smrti vold-a

$(document).ready(function(){  //ovo document.ready se kuca uvek 
    $("#krajkviza").click(function() { //kad se klikne na kraj kviza na #vremeZaKviz div appenduj ovo dole
        if(razlika>0){ //klikne li se zavrsi kviz pre odgovaranja na sve nece se ni izracunati razlika pa se nece ni appendovati
        $("#vremeZaKviz").append(
            
            "<p style = 'color:white ; background-color:black ; font-size:30px ; flex:1  ; text-align:center'>"
            +"Odradili ste kviz za: " 
            + razlika/1000 + 
            " sekundi"
            +
            "</p>");
        }
            
    });

    $("#datumsmrti").append( //cim se loaduje strana appenduj vreme, math.round na ceo broj jer ima 16 decimala 
        "<p>" + Math.round(daniOdVoldemora) + " dana." + "</p>"
    )
 });

var voldemortDeath = new Date(1981, 11, 31); 
var sada = new Date();
var daniOdVoldemora = (sada - voldemortDeath)/(1000*60*60*24);










      



