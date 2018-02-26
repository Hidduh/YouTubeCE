$( document ).ready(function() {
    window.alert("jquery-init");

    var $path   = window.location.pathname;
    var $url    = window.location.href;
    var $option = false;

    // Get all tab URLs
    function getWindows() {
        chrome.windows.getAll({populate: true}, function (windows) {
            windows.forEach(function (window) {
                window.tabs.forEach(function (tab) {
                    //collect all of the urls here, I will just log them instead
                    console.log(tab.url);
                });
            });

            warnUserClosure($option);
        });
    }

    function warnUserClosure($option) {
        switch ($option) {
            case true: {
                window.alert("Case TRUE");
                break;
            } case false: {
                window.alert("Case FALSE");
            }
        }
        return $option;
    }

    function sendModalWindow($msg) {
        var $confirmModal = confirm($msg);

        if ($confirmModal == true) {
            closeBrowser();
        } else {
            return false;
        }
    }

    function closeBrowser() {
        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.remove(tabs[i].id);
            }
        });
    }

});