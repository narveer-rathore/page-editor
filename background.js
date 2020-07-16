// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function changeIcon (currentView) {
  if (currentView) {
    chrome.browserAction.setIcon({ path: 'images/icon-' + currentView + '-128.png' });
  }
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'toggle'}, changeIcon);
});
