// Toggle Icon on tap
function changeIcon (currentView) {
  if (currentView) {
    chrome.browserAction.setIcon({ path: 'images/icon-' + currentView + '-128.png' });
  }
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'toggle'}, changeIcon);
  }
});
