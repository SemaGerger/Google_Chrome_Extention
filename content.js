//ayrı bir sayfada açılıyor:

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.command === 'listBookmarks') {
        chrome.bookmarks.search({}, function (bookmarks) {
            clearAndAppendList(document.getElementById('bookmarksList'), bookmarks);
        });
    }
});


//sadece form gibi açılıyor:
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.command === 'listBookmarks') {
//         chrome.bookmarks.search({}, function (bookmarks) {
//             clearAndAppendList(document.getElementById('bookmarksList'), bookmarks);
//         });
//     }
// });