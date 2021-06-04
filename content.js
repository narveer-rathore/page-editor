// set "status" as current state
const setMode = (status = "off") => {
    document.designMode = status;
    chrome.storage.sync.set({designMode: status});
}

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
    // If the received message has the expected format...
    if (msg.text === 'toggle') {
        chrome.storage.sync.get(['designMode'], function(result) {
            if (document.designMode === "off" || !result.designMode) {
                setMode("on");
            } else {
                setMode("off");
            }
            cb(document.designMode);
        });
    }
    return true;
});

// get initially stored value from storage
chrome.storage.sync.get(['designMode'], function(result) {
    setMode(result.designMode);
});
