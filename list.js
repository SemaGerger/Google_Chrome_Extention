document.addEventListener('DOMContentLoaded', function () {
  
  
    let bookmarksList = document.getElementById("bookmarksList");
    chrome.bookmarks.search({}, function (bookmarks) {
        clearAndAppendList(bookmarksList, bookmarks);
    });

    function clearAndAppendList(bookmarksList, bookmarks) {
        bookmarksList.innerHTML = '';

        if (bookmarks && bookmarks.length > 0) {
            bookmarks.forEach(function (bookmark) {
                if (bookmark.url) {
                    var div = document.createElement('div');
                    div.textContent = bookmark.title + ' é ' + bookmark.url;
                    bookmarksList.appendChild(div);
                }
            });
        } else {
            console.error("Bookmarks is undefined or empty.");
        }
    }
});

let copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    let listItems = bookmarksList.getElementsByTagName("div");
    let copyText = "";

    for (let i = 0; i < listItems.length; i++) {
        copyText += listItems[i].textContent + "\n";
    }

    navigator.clipboard.writeText(copyText).then(function () {
        copyButton.innerHTML = "Kopyalandı!";
        copyButton.disabled = true;
        copyButton.style.background = "linear-gradient(90deg, rgb(77, 55, 73) 0%, rgba(6, 5, 6, 0.253) 35%)";

        setTimeout(function () {
            copyButton.innerHTML = "Listeyi Kopyala";
            copyButton.disabled = false;
            copyButton.style.background = ""; 
        }, 3000);
    }).catch(function (error) {
        // Handle clipboard write error
        alert("Kopyalama hatası: " + error.message);
    });
}

function createBookmark(title, url) {
    let bookmarkData = { 'url': url, 'parentId': '1' };

    if (title) {
        bookmarkData.title = title;
    }

    chrome.bookmarks.create(bookmarkData, function (result) {
        if (!result) {
            alert("Bookmark couldn't be created.");
        }
    });
}
