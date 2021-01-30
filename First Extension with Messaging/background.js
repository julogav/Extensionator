function  incFont( info, tab) {
  chrome.tabs.sendMessage(tab.id, {action: "incFont"}, null, (response) => console.log(response));
}

chrome.runtime.onInstalled.addListener ( function () {
  chrome.contextMenus.create({
    "title": "Super Font",
    "contexts": ["page"],
    "onclick": incFont
  })
})