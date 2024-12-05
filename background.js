// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.create({url: chrome.runtime.getURL("index.html")});
// });
//

chrome.action.onClicked.addListener((tab) => {
  (async () => {
    try {
      await chrome.tabs.create({
        url: chrome.runtime.getURL("index.html")
      });
    } catch (error) {
      console.error("Error creating tab:", error);
    }
  })();
});