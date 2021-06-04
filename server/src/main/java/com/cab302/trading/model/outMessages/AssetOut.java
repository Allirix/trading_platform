package com.cab302.trading.model.outMessages;

import java.sql.Statement;
import java.util.Date;

import com.cab302.trading.model.Assets;
import com.cab302.trading.model.DBConnect;
import com.cab302.trading.model.inMessages.AssetIn;

public class AssetOut {

        private int assetId;
        private String assetName;

        public AssetOut() {

        }

        public AssetOut(String assetName, int assetId) {

            this.assetName = assetName;
            this.assetId = assetId;

        }

        public int getAssetId() { return assetId; }

        public String getAssetName() {
            return assetName;
        }

        public void setAssetName(String assetName) {
            this.assetName = assetName;
        }


    }


