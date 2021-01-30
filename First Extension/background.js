function  incFont( info, tab) {
  chrome.tabs.executeScript({
    code: `document.body.style.fontSize = "32px"`
  })
}

chrome.runtime.onInstalled.addListener ( function () {
  chrome.contextMenus.create({
    "title": "Super Font",
    "contexts": ["page"],
    "onclick": incFont
  })
})