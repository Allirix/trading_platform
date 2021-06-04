package com.cab302.trading.model;

import java.sql.SQLException;

public class Assets {

        private String assetName;
        private int assetID;

        public String getAssetName() {

            return assetName;
        }

        public void setAssetName(String assetName) throws SQLException {
            //DBConnect.getInstance();
            this.assetName = assetName;
        }

        public int getAssetID() {
            return assetID;
        }

        public void setAssetID(int assetID) {
            this.assetID = assetID;
        }

    }


