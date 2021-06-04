package com.cab302.trading.model.outMessages;

import java.util.Date;

import com.cab302.trading.model.Assets;

public class AssetOut {

        private String assetId;
//        private String groupName;
//        private Date sentTimestamp;

        public AssetOut() {

        }

        public AssetOut(String assetId) {
            this.assetId = assetId;
        }

        public String getAssetId() { return assetId; }


//        public void setContent(String content) {
//            this.content = content;
//        }
//        public String getGroupName() {
//            return groupName;
//        }
//        public void setGroupName(String groupName) {
//            this.groupName = groupName;
//        }
//
//        public Date getSentTimestamp() {
//            return sentTimestamp;
//        }
//
//        public void setSentTimestamp(Date sentTimestamp) {
//            this.sentTimestamp = sentTimestamp;
//        }

    }


