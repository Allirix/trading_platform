package com.cab302.trading.model;

import com.cab302.trading.model.inMessages.AssetIn;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Assets {

        private String assetName;
        private int assetID;




        public static ResultSet getAsset(String assetId) throws SQLException {
            Statement statement = DBConnect.getInstance().createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY);
            String query = "select * from assets where assetId = "+ assetId+ ";";
            return statement.executeQuery(query);
        }

        public void setAsset(String assetName) throws SQLException {
            DBConnect.getInstance();
            this.assetName = assetName;
        }

        public int getAssetID() {
            return assetID;
        }

        public void setAssetID(int assetID) {
            this.assetID = assetID;
        }

    }


