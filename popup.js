
let listButton = document.getElementById("listButton");
let listAndAdd = document.getElementById("listAndAdd");
let addLink = document.getElementById("addLink");


//listeyi başka taba taşıyor 1

// Function to send a message to the list.html page to trigger bookmark listing
// function sendMessageToContentScript(message) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, message);
//     });
//}
// listAndAdd.addEventListener('click', function () {
//     chrome.tabs.create({ url: chrome.runtime.getURL('list.html') }, function (tab) {
//         setTimeout(function(){
//             sendMessageToContentScript({ command: 'listBookmarks' });
//         }, 1000);
        
//     });
// });
// addLink.addEventListener('click', function(){
//     chrome.tabs.create({url: chrome.runtime.getURL('add.html')}, function (tab) {
//         setTimeout(function () {
//             sendMessageToContentScript({command: 'listBookmarks'});
//         }, 1000);
//     });
// });



function openTabAndSendMessage(url) { //listeyi başka taba taşıyor 2
    chrome.tabs.create({ url: chrome.runtime.getURL(url) }, function (tab) {
        setTimeout(function() {
            sendMessageToContentScript({ command: 'listBookmarks' });
        }, 1000);

    });
}





listAndAdd.addEventListener('click', function () {
    openTabAndSendMessage('list.html');
});

addLink.addEventListener('click', function () {
    openTabAndSendMessage('add.html');
});


//listeyi başka taba taşıyor 3
// function sendMessageToContentScript(tabId, message) {
//     chrome.tabs.sendMessage(tabId, message, function (response) {
//         // Handle the response if needed
//     });
// }

// function openTabAndSendMessage(url) {
//     chrome.tabs.create({ url: url }, function (tab) {
//         // Set a listener for when the content script is loaded in the new tab
//         chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
//             if (tabId === tab.id && changeInfo.status === 'complete') {
//                 // Remove the listener to avoid multiple calls
//                 chrome.tabs.onUpdated.removeListener(listener);

//                 // Send the message to the content script
//                 sendMessageToContentScript(tab.id, { command: 'listBookmarks' });
//             }
//         });
//     });
// }

// listAndAdd.addEventListener('click', function () {
//     openTabAndSendMessage('list.html');
// });

// addLink.addEventListener('click', function () {
//     openTabAndSendMessage('add.html');
// });


