// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, cb) {

    // If the received message has the expected format...
    if (msg.text === 'toggle') {
        // toggle current design mode
        document.designMode === "off" ? document.designMode = "on" : document.designMode = "off";
        cb(document.designMode);
    }
});
