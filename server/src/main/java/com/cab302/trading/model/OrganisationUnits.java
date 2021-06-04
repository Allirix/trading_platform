package com.cab302.trading.model;

import java.util.ArrayList;
import java.util.List;

public class OrganisationUnits {

        String organisationName;
        int credits;
        int organisationUnitID;

        //TODO
        List<Users> organisationMembers = new ArrayList<>(); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        public OrganisationUnits(String organisationName){
            this.organisationName = organisationName;
            this.credits = 0;
        }

        public List<Users> GetOrganisationMembers(){
            return organisationMembers;
        }

        public List<Users> AddOrganisationMembers(Users user){
            organisationMembers.add(user);
            return organisationMembers;
        }

        public String GetOrganisationName() {
            return organisationName;
        }

        public String SetOrganisationName(String name) {
            organisationName = name;
            return organisationName;
        }

        public int getCredits(){
            return credits;
        }

        public int addCredits(int credit) {
            credits += credit;
            return credits;
        }

        public int deductCredits(int credit){
            credits -= credit;
            return credits;

        }

        public int setOrganisationUnitID(int id) {
            organisationUnitID = id;
            return organisationUnitID;
        }

        public int getOrganisationUnitID() {
            return organisationUnitID;
        }




}
