
document.addEventListener('DOMContentLoaded', function () {
    let addBookmarksButton = document.getElementById("addBookmarksButton");

    if (addBookmarksButton) {
        addBookmarksButton.addEventListener('click', function () {
            let pasteTextarea = document.getElementById('pasteTextarea');
            let lines = pasteTextarea.value.split('\n');

            lines.forEach(function (line) {
                let separatorIndex = line.indexOf('é');

                if (separatorIndex !== -1) {
                    let title = line.substring(0, separatorIndex).trim();
                    let url = line.substring(separatorIndex + 1).trim();
                    createBookmark(title || '', url);
                }
            });

            pasteTextarea.value = '';
        });
    } else {
        console.error("Element with ID 'addBookmarksButton' not found.");
    }

    // Diğer fonksiyonları ekleyin...
});

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

// addBookmarksButton.addEventListener('click', function () {
//     var pasteTextarea = document.getElementById('pasteTextarea');
//     var lines = pasteTextarea.value.split('\n');

//     lines.forEach(function (line) {
//         var separatorIndex = line.indexOf('é');

//         if (separatorIndex !== -1) {
//             var title = line.substring(0, separatorIndex).trim();
//             var url = line.substring(separatorIndex + 1).trim();
//             createBookmark(title || '', url);
//         }
//     });

//     pasteTextarea.value = '';
// });
