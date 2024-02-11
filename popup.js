
let listButton = document.getElementById("listButton");
let listAndAdd = document.getElementById("listAndAdd");
let addLink = document.getElementById("addLink");



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
