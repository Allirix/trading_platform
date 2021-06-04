package com.cab302.trading.model;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;


public class DBConnect {

    private static Connection connection = null;

    private DBConnect() throws SQLException {

        Properties props = new Properties();
        FileInputStream in;
        System.out.println(new File(".").getAbsolutePath());

        try {
            in = new FileInputStream("server\\src\\main\\resources\\db.props");
            props.load(in);
            in.close();

            // specify the data source, username and password
            String url = props.getProperty("jdbc.url");
            String username = props.getProperty("jdbc.username");
            String password = props.getProperty("jdbc.password");
            String schema = props.getProperty("jdbc.schema");

            // get a connection
            connection = DriverManager.getConnection(url + "/" + schema,
                    username, password);

            DBSetup.createDatabase(connection);

            DBSetup.addAsset(connection, 9898, "TestAsset");

        int populated = DBSetup.numRows(connection);

        if(populated < 5){
            System.out.println("The database is being populated");
            DBSetup.populateDatabase(connection);
        }

        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

    public static Connection getInstance() throws SQLException {

        if (connection == null) {
            new DBConnect();
        }
        return connection;

    }






    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



}
