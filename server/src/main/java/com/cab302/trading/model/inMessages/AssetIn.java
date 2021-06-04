package com.cab302.trading.model.inMessages;

import java.util.Date;

public class AssetIn {

        private String assetId;
//        private String senderName;
//        private String message;
//        private Date sentTimestamp;

        public AssetIn() {
            System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        }

        public AssetIn(String assetId) {
            this.assetId = assetId;
        }

//        public String getSenderId() {
//            return senderId;
//        }
//
//        public void setSenderId(String senderId) {
//            this.senderId = senderId;
//        }
//
        public String getAssetId() {
            return assetId;
        }
//
//        public void setMessage(String message) {
//            this.message = "HEYYYYYYY";
//        }
//
//        public String getSenderName() {
//            return senderName;
//        }
//
//        public void setSenderName(String senderName) {
//            this.senderName = senderName;
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

