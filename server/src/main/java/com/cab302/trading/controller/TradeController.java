package com.cab302.trading.controller;


        import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
        import org.springframework.messaging.handler.annotation.MessageMapping;
        import org.springframework.messaging.handler.annotation.SendTo;
        import org.springframework.stereotype.Controller;
        import org.springframework.web.util.HtmlUtils;
        import com.cab302.trading.model.outMessages.AssetOut;
        import com.cab302.trading.model.inMessages.AssetIn;


@Controller
public class TradeController {

    @MessageMapping("/asset")  // here
    @SendTo("/topic/asset")  // here
    public AssetOut handleAsset(AssetIn assetId) throws Exception {

        return new AssetOut(HtmlUtils.htmlEscape("BOOOP"));
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
