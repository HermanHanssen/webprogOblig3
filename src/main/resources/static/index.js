/*
let velgFilm;
let antall;
let feilmeldingAntall;
let fornavn;
let feilmeldingFornavn;
let etternavn;
let feilmeldingEtternavn;
let telefon;
let feilmeldingTelefon;
let epost;
let feilmeldingEpost;

let kjopBillett;
let billetter;
let slettBilletter;


const start = "<table><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>";

 */

$(document).ready(function(){

    /*
    velgFilm = document.getElementById("velgFilm");
    antall = document.getElementById("antall");
    feilmeldingAntall = document.getElementById("feilmeldingAntall");
    fornavn = document.getElementById("fornavn");
    feilmeldingFornavn = document.getElementById("feilmeldingFornavn");
    etternavn = document.getElementById("etternavn");
    feilmeldingEtternavn = document.getElementById("feilmeldingEtternavn");
    telefon = document.getElementById("telefon");
    feilmeldingTelefon = document.getElementById("feilmeldingTelefon");
    epost = document.getElementById("epost");
    feilmeldingEpost = document.getElementById("feilmeldingEpost");

    kjopBillett = document.getElementById("kjopBillett");
    billetter = document.getElementById("billetter");
    slettBilletter = document.getElementById("slettBilletter");

     */

    console.log("DOMContentLoaded kjører!");


    let ut = "<table class='table table-striped'><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr></table>";
    $("#billetter").html(ut);

});

function bareBokstaver(streng){
    !/[^a-åA-Å]/.test(streng);
}

function validerEpost(number){
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(number);
}

function validerTlf(tlf){
    return !/^\+?(\d{2})?\d{8}$/.test(tlf);
}

function kjopBilettFunksjon(){
    console.log("Kjøpefunksjon kjører");

    $("#feilmeldingEpost").html("");
    $("#feilmeldingEtternavn").html("");
    $("#feilmeldingAntall").html("");
    $("#feilmeldingEtternavn").html("");
    $("#feilmeldingTelefon").html("");



    let feilmeldingSjekk = true;

    let stringFilm = $("#velgFilm").val();
    let stringAntall = $("#antall").val();
    let intAntall = parseInt(stringAntall);
    let stringFornavn = $("#fornavn").val();
    let stringEtternavn = $("#etternavn").val();
    let stringTelefon = $("#telefon").val();
    let intTlf =parseInt(stringTelefon);

    let stringEpost = $("#epost").val();

    console.log(stringAntall);
    if(isNaN(intAntall) || !stringAntall || stringAntall.length > 2){
        $("#feilmeldingAntall").html("Må oppgi antall");
        console.log("Inn i if-antall");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(intAntall<1){
        $("#feilmeldingAntall").html("Antall må være større enn 1");
        console.log("Inn i if-antall2");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(!stringFornavn || stringFornavn.length>50 || bareBokstaver(stringFornavn)){
        $("#feilmeldingFornavn").html("Feil input");
        console.log("Inn i if-fnavn");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(!stringEtternavn || stringEtternavn.length>50 || bareBokstaver(stringEtternavn)){
        $("#feilmeldingEtternavn").html("Feil input");
        console.log("Inn i if-enavn");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(!stringTelefon || stringTelefon.length !==8 || isNaN(intTlf) || validerTlf(stringTelefon) ){
        $("#feilmeldingTelefon").html("Feil input");
        console.log("Inn i if-tlf");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(!stringEpost || stringEpost.length > 50 || validerEpost(stringEpost) ){
        $("#feilmeldingEpost").html("Feil input");
        console.log("Inn i if-epost");
        feilmeldingSjekk = false;
    }
    console.log(feilmeldingSjekk);
    if(feilmeldingSjekk){
        console.log("Ikke noen feil");
        regBillett(stringFilm, stringAntall, stringFornavn, stringEtternavn, stringTelefon, stringEpost);
    }
    else{
        console.log("Noe er feil");
    }
}

function regBillett(film, antall, fornavn, etternavn, telefon, epost){

    let nyBillett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost

    }

    $.post("/lagre", nyBillett, function(){
        hentAlle();
    });
}

function hentAlle(){
    $.get("/hentAlle", function(data){
        formaterData(data);
    });
}

function formaterData(billetter){

    let ut = "<table class='table table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th>" +
        "<th>Epost</th></tr>";
    for(const nyBillett of billetter){
        ut+= "<tr><td>"+nyBillett.film+"</td><td>"+nyBillett.antall+"</td><td>"+nyBillett.fornavn+"</td><td>"+
            nyBillett.etternavn+"</td><td>"+nyBillett.telefon+"</td><td>"+nyBillett.epost+"</td></tr>";
    }
    ut+= "</table>"
    $("#billetter").html(ut);
}

function slettAlle(){
    $.get("/slettAlle", function(){
        hentAlle();
    });
}

