package com.cab302.trading.model;

import java.sql.*;

public class DBSetup {

    public static final String CREATE_ASSETS_TABLE =
            "CREATE TABLE IF NOT EXISTS assets ("
                    + "assetID int UNSIGNED AUTO_INCREMENT NOT NULL UNIQUE,"
                    + "assetName VARCHAR(50),"
                    + "PRIMARY KEY (assetID)" + ");";

    public static final String CREATE_ORGANISATION_UNIT_TABLE =
            "CREATE TABLE IF NOT EXISTS organisationUnit ("
                    + "organisationUnitID int UNSIGNED AUTO_INCREMENT NOT NULL UNIQUE,"
                    + "organisationName VARCHAR(50),"
                    + "credits int,"
                    + "PRIMARY KEY (organisationUnitID)" + ");";

    public static final String CREATE_ORGANISATIONAL_ASSETS_TABLE =
            "CREATE TABLE IF NOT EXISTS organisationalAssets ("
                    + "organisationalAssetID int UNSIGNED AUTO_INCREMENT NOT NULL UNIQUE,"
                    + "assetID int UNSIGNED NOT NULL,"
                    + "organisationUnitID int UNSIGNED NOT NULL,"
                    + "quantity int,"
                    + "PRIMARY KEY (organisationalAssetID),"
                    + "FOREIGN KEY (assetID) REFERENCES assets(assetID),"
                    + "FOREIGN KEY (organisationUnitID) REFERENCES organisationUnit(organisationUnitID)" + ");";


    public static final String CREATE_TRADE_TABLE =
            "CREATE TABLE IF NOT EXISTS trade ("
                    + "tradeID int(11) UNSIGNED AUTO_INCREMENT NOT NULL UNIQUE,"
                    + "tradeQuantity int,"
                    + "tradePrice int,"
                    + "organisationUnitID int UNSIGNED NOT NULL,"
                    + "assetID int UNSIGNED NOT NULL,"
                    + "isSellOrder BOOLEAN,"
                    + "offerDate DATE,"
                    + "completedDate DATE,"
                    + "PRIMARY KEY (tradeID),"
                    + "FOREIGN KEY (organisationUnitID) REFERENCES organisationUnit(organisationUnitID),"
                    + "FOREIGN KEY (assetID) REFERENCES assets(assetID)" + ");";

    public static final String CREATE_USER_TABLE =
            "CREATE TABLE IF NOT EXISTS user ("
                    + "userID int UNSIGNED AUTO_INCREMENT NOT NULL UNIQUE,"
                    + "username VARCHAR(50),"
                    + "password VARCHAR(50),"
                    + "userType BOOLEAN,"
                    + "organisationUnitID int UNSIGNED NOT NULL,"
                    + "PRIMARY KEY (userID),"
                    + "FOREIGN KEY (organisationUnitID) REFERENCES organisationUnit(organisationUnitID)" + ");";


    public static int numRows(Connection connection) throws SQLException {

        return 6;

    }

    public static void populateDatabase(Connection connection) throws SQLException {

    }


    public static void createDatabase(Connection connection) throws SQLException {

        Statement statement = connection.createStatement();

        statement.execute(CREATE_ASSETS_TABLE);
        statement.execute(CREATE_ORGANISATION_UNIT_TABLE);
        statement.execute(CREATE_ORGANISATIONAL_ASSETS_TABLE);
        statement.execute(CREATE_TRADE_TABLE);
        statement.execute(CREATE_USER_TABLE);
    }

    public static void addAsset(Connection connection, Integer assetID, String assetName) throws SQLException {
        String INSERT_ASSET = "INSERT INTO com.cab302.trading.model.Assets (assetID, assetName) VALUES (?, ?);";

        PreparedStatement addAsset = connection.prepareStatement(INSERT_ASSET);

        addAsset.setInt(1, assetID);
        addAsset.setString(2, assetName);

        //addAsset.execute();

    }

    public static void addOrganisationalAsset(Connection connection, Integer organisationalAssetsID, Integer assetID, Integer organisationUnitID, Integer quantity) throws SQLException {
        String INSERT_ORGANISATIONAL_ASSET = "INSERT INTO organisationalAssets (organisationalAssetsID, assetID, organisationUnitID, quantity) VALUES (?, ?, ?, ?);";
        PreparedStatement addOrganisationalAsset = connection.prepareStatement(INSERT_ORGANISATIONAL_ASSET);

        addOrganisationalAsset.setInt(1, organisationalAssetsID);
        addOrganisationalAsset.setInt(2, assetID);
        addOrganisationalAsset.setInt(3, organisationUnitID);
        addOrganisationalAsset.setInt(4, quantity);

        addOrganisationalAsset.execute();

    }

    public static void addOrganisationUnit(Connection connection, Integer organisationUnitID, String organisationName, Integer credits) throws SQLException {

        String INSERT_USER = "INSERT INTO organisationUnit (organisationUnitID, organisationName, credits) VALUES (?, ?, ?);";

        PreparedStatement addOrganisationUnit = connection.prepareStatement(INSERT_USER);

        addOrganisationUnit.setInt(1, organisationUnitID);
        addOrganisationUnit.setString(2, organisationName);
        addOrganisationUnit.setInt(3, credits);

        addOrganisationUnit.execute();

    }

    public static void addTrade(Connection connection, Integer tradeID, Integer tradeQuantity, Integer tradePrice,
                                Integer organisationalUnitID, Integer tradeTypeID, Integer assetsID,
                                Date offerDate, Date completedDate) throws SQLException {

        String INSERT_TRADE = "INSERT INTO Trade (tradeID, tradeQuantity, tradePrice, organisationalUnitID, tradeTypeID," +
                "assetsID, offerDate, completedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

        PreparedStatement addTrade = connection.prepareStatement(INSERT_TRADE);

        addTrade.setInt(1, tradeID);
        addTrade.setInt(2, tradeQuantity);
        addTrade.setInt(3, tradePrice);
        addTrade.setInt(4, organisationalUnitID);
        addTrade.setInt(5, tradeTypeID);
        addTrade.setInt(6, assetsID);
        addTrade.setDate(7, offerDate);
        addTrade.setDate(8, completedDate);

        addTrade.execute();
    }

    public static void addTradeType(Connection connection, Integer tradeTypeID, String tradeType) throws SQLException {
        String INSERT_TRADE_TYPE = "INSERT INTO tradeType (tradeTypeID, tradeType) VALUES (?, ?);";

        PreparedStatement addTradeType = connection.prepareStatement(INSERT_TRADE_TYPE);

        addTradeType.setInt(1, tradeTypeID);
        addTradeType.setString(2, tradeType);

        addTradeType.execute();
    }

    public static void addUser(Connection connection, Integer userID, String username, String password, Integer userType, Integer organisationUnitID) throws SQLException {
        String INSERT_USER = "INSERT INTO user (userID, username, password, userType, organisationUnitID) VALUES (?, ?, ?, ?, ?);";

        PreparedStatement addUser = connection.prepareStatement(INSERT_USER);

        addUser.setInt(1, userID);
        addUser.setString(2, username);
        addUser.setString(3, password);
        addUser.setInt(4, userType);
        addUser.setInt(5, organisationUnitID);

        addUser.execute();
    }

    public static void addUserType(Connection connection, Integer userTypeID, String userType) throws SQLException {
        String INSERT_USER_TYPE = "INSERT INTO userType (userTypeID, userType) VALUES (?, ?);";

        PreparedStatement addUserType = connection.prepareStatement(INSERT_USER_TYPE);

        addUserType.setInt(1, userTypeID);
        addUserType.setString(2, userType);

        addUserType.execute();
    }
}