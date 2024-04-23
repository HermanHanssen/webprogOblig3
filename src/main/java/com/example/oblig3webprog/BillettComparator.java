package com.example.oblig3webprog;

import java.util.Comparator;
public class BillettComparator implements Comparator<Billett>{

    public int compare(Billett b1, Billett b2){
        String etternavn1 = b1.getEtternavn().toLowerCase();
        String etternavn2 = b2.getEtternavn().toLowerCase();

        return etternavn1.compareTo(etternavn2);
    }
}
