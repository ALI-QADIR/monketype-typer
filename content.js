import main from "./main.js";

(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const { flag } = request;
        if (flag === "YES") {
            // show an alert
            main();
        } else {
            // show an alert
            alert("not monkeytype");
        }
    });
})();
