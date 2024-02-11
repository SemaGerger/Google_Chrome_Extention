//ayrı bir sayfada açılıyor:
//background.js

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.command === 'listBookmarks') {
//         chrome.bookmarks.search({}, function (bookmarks) {
//             clearAndAppendList(document.getElementById('bookmarksList'), bookmarks);
//         });
//     }
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.command === 'listBookmarks') {
//         var bookmarksListElement = document.getElementById('bookmarksList');
//         if (bookmarksListElement) {
//             chrome.bookmarks.search({}, function (bookmarks) {
//                 clearAndAppendList(bookmarksListElement, bookmarks);
//             });
//         }
//     }
// });

// background.js

// // İletişim sırasında kullanılacak olan bağlantı nesnesi
// let connection;

// function handleError(error) {// İletişim sırasında hata kontrolü için bir fonksiyon
//     console.error("Error during communication:", error);
// }
// function createConnection() {// İletişim nesnesi oluşturma
//     connection = chrome.runtime.connect({ name: "background" });
//     connection.onMessage.addListener(function (message) {// İletişim nesnesi üzerinden gelen mesajları dinleme
//         if (message.command === 'listBookmarks') {
//             chrome.bookmarks.search({}, function (bookmarks) {
//                 connection.postMessage({ command: 'bookmarksList', data: bookmarks });// İletişim nesnesi üzerinden listeyi gönderme
//             });
//         }
//     });
//     connection.onDisconnect.addListener(function () {// İletişim nesnesi üzerinden hata kontrolü
//         handleError(chrome.runtime.lastError);
//     });
// }
// createConnection();// İletişim nesnesi oluşturma
