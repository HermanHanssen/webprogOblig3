package com.example.oblig3webprog;

public class Billett {

    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;

    public Billett(String film, int antall, String fornavn, String telefon, String epost, String etternavn){
        this.film=film;
        this.antall=antall;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.epost=epost;
        this.telefon=telefon;
    }

    public Billett(){

    }

    public String getFilm(){return film;}
    public void setFilm(String film){this.film=film;}

    public int getAntall(){
        return antall;
    }
    public void setAntall(int antall){
        this.antall = antall;
    }

    public String getFornavn(){
        return fornavn;
    }
    public void setFornavn(String fornavn){
        this.fornavn = fornavn;
    }

    public String getEtternavn(){
        return etternavn;
    }
    public void setEtternavn(String etternavn){
        this.etternavn = etternavn;
    }

    public String getTelefon(){
        return telefon;
    }
    public void setTelefon(String telefonnr){
        this.telefon = telefonnr;
    }

    public String getEpost(){
        return epost;
    }
    public void setEpost(String epost){
        this.epost = epost;
    }


}
