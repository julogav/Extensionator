chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  if (message.action === "incFont") {
    document.body.style.fontSize = "32px";
    sendResponse({
      response: "I've resized the font to 32px"
    });
  }
});