chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url === "https:www.monkeytype.com") {
        chrome.tabs.sendMessage(tabId, {
            flag: "YES",
        });
    }
});
