package com.cab302.trading.controller;


        import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
        import org.springframework.messaging.handler.annotation.MessageMapping;
        import org.springframework.messaging.handler.annotation.SendTo;
        import org.springframework.stereotype.Controller;
        import org.springframework.web.util.HtmlUtils;
        import com.cab302.trading.model.outMessages.AssetOut;
        import com.cab302.trading.model.inMessages.AssetIn;

        import com.cab302.trading.model.Assets;

        import java.sql.ResultSet;


@Controller
public class AssetController {

    @MessageMapping("/asset")  // here
    @SendTo("/topic/asset")  // here
    public AssetOut handleAsset(AssetIn asset) throws Exception {

        ResultSet resultSet = Assets.getAsset(asset.getAssetId());

        resultSet.next();

        String assetName = resultSet.getString("assetName");
        int assetId = resultSet.getInt("assetID");

        return new AssetOut(assetName, assetId);


    }

//    @MessageMapping("/guestupdate")
//    @SendTo("/topic/guestupdates")
//    public ChatOutMessage handleUserTyping(ChatInMessage message) throws Exception {
//        return new ChatOutMessage("Someone is typing...");
//    }
//
//    @MessageMapping("/guestjoin")
//    @SendTo("/topic/guestnames")
//    public ChatOutMessage handleMemberJoins(ChatInMessage message) throws Exception {
//        return new ChatOutMessage(message.getMessage());
//    }
//
//    @MessageExceptionHandler
//    @SendTo("/topic/errors")
//    public ChatOutMessage handleExcpetion(Throwable exception) {
//
//        ChatOutMessage myError = new ChatOutMessage("An error happened.");
//        return myError;
//    }
}
