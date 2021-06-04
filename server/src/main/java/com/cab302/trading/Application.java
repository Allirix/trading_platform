package com.cab302.trading;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

//TODO
//Set up proper server connection to initiate the port and allow disconnection etc
import com.cab302.trading.model.DBConnect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    private static Connection instance;

    public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {

        instance = DBConnect.getInstance();
        SpringApplication.run(Application.class, args);
        /*
        ServerSocket serverSocket = new ServerSocket(12345,4);
        for(;;){
            Socket socket = serverSocket.accept();
            InputStream inputStream = socket.getInputStream();
            ObjectInputStream objectInputStream = new ObjectInputStream(inputStream);

            //TODO
            //Parse name and password from user input with password hashing
            String name = (String) objectInputStream.readObject();
            String password = (String) objectInputStream.readObject();

            instance = com.cab302.trading.model.DBConnect.getInstance();

            //int userLogin = com.cab302.trading.model.DBConnect.UserLogin(instance, name, password);

            OutputStream outputStream = socket.getOutputStream();
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(outputStream);
           // objectOutputStream.writeObject(userLogin);

            objectInputStream.close();
            socket.close();
            /*
         */
        }
    }


