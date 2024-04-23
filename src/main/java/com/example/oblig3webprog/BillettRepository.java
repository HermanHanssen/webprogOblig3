package com.example.oblig3webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    JdbcTemplate db;

    public void lagreAlleBilletter(Billett innBillett){
        String sql = "INSERT INTO Billett(film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,
                innBillett.getFilm(),
                innBillett.getAntall(),
                innBillett.getFornavn(),
                innBillett.getEtternavn(),
                innBillett.getTelefon(),
                innBillett.getEpost());

    }

    public List<Billett> hentAlleBilletter(){
        try{
            String sql = "SELECT * FROM BILLETT";
            List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));

            Collections.sort(alleBilletter, new BillettComparator());
            return alleBilletter;
        } catch (DataAccessException e){
            e.printStackTrace();
            throw e;
        }


    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
