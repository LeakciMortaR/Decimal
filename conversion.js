//Feuille de JS de Conversion
// MV 2019
var HmtlDiv=document.getElementById('PanneauBinaire')
HmtlDiv.addEventListener('click', Conversion);

function Conversion(){
    var TblBinaire= new Array;
    TblBinaire=document.getElementsByName('TblBinaire[]');
    // Un compteur pour la boucle FOR
    var Cmptr=0;
    // Variable qui reçoit la valeur de chaque case
    // à savoir 1,2,4,8,... à cocher
    var Digit=0;
    // Pour afficher le résultat
    var Decimal=0;
    // Pour formater l'affichage de la var Octet qui servira à l'affichage HTML Mode Binaire
    var TblOctet=['0','0','0','0','0','0','0','0'];
    //Octet contiendra la concaténation Finale de TblOctet
    var Octet="";
    //Il y a eu un clic sur le bouton conversion, Il me faut récuperer le tableau des input dans le tableau javascript

    for (Cmptr=0; Cmptr<TblBinaire.length; Cmptr++){
        if (TblBinaire[Cmptr].checked){
            Digit=TblBinaire[Cmptr].value;
            // Je convertis Digit chaîne de caracteres en valeur décimale et je les additionne
            Decimal=Decimal+parseInt(Digit,10);
            //alert('Digit coché:'+Digit);
            // je met à jour el tableau affichage HTML pour afficher la valeur en mode binaire
            TblOctet[Cmptr]='1';
        } // Fin du IF
        Octet=Octet+TblOctet[Cmptr];
    }// Fin de la boucle 

    // Alert(Decimal);
    var Affichage=document.getElementById('ResultDecimal');
    Affichage.innerHTML='Résultat valeur décimale : '+Decimal;
    var AffichageOctet=document.getElementById('ResultOctet');
    AffichageOctet.innerHTML='Résultat en mode Binaire : '+Octet;
}