document.addEventListener('DOMContentLoaded', function () {
  
    // List existing bookmarks
    let bookmarksList = document.getElementById("bookmarksList");
    chrome.bookmarks.search({}, function (bookmarks) {
        clearAndAppendList(bookmarksList, bookmarks);
    });

    // Clear and append bookmarks to the list
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

// Copy to clipboard button
let copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    let listItems = bookmarksList.getElementsByTagName("div");
    let copyText = "";

    for (let i = 0; i < listItems.length; i++) {
        copyText += listItems[i].textContent + "\n";
    }

    navigator.clipboard.writeText(copyText).then(function () {
        // Update button text and styling on successful copy
        copyButton.innerHTML = "Kopyalandı!";
        copyButton.disabled = true;
        copyButton.style.background = "linear-gradient(90deg, rgb(77, 55, 73) 0%, rgba(6, 5, 6, 0.253) 35%)";

        // Reset button text and styling after a delay
        setTimeout(function () {
            copyButton.innerHTML = "Listeyi Kopyala";
            copyButton.disabled = false;
            copyButton.style.background = ""; // or set it to the default background
        }, 3000);
    }).catch(function (error) {
        // Handle clipboard write error
        alert("Kopyalama hatası: " + error.message);
    });
}

// Function to create a new bookmark
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
