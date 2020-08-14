browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url!=undefined) {
      if ((changeInfo.url.match(/youtube.com/))&&((changeInfo.url.match(/watch/))||(changeInfo.url.match(/user/)))) {
        browser.tabs.executeScript(tabId, {file: "first_load.js"});
      }
      
  }
}); 

browser.tabs.onActivated.addListener(function(activeInfo) {
  browser.tabs.get(activeInfo.tabId, function(tab){
      console.log(tab.url);
  });
}); 
