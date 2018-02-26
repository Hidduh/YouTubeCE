$( document ).ready(function() {
    window.alert("jquery-init");

    var $path   = window.location.pathname;
    var $url    = window.location.href;
    var $option = false;
    var $defurl = "https://www.youtube.com/";

    // init test
    getWindows();

    function getWindows() {
        chrome.windows.getAll({populate: true}, function (windows) {
            windows.forEach(function (window) {
                window.tabs.forEach(function (tab) {
                    // to-do: loop through and save tab containing YouTube
                    // to-do: store tab containing YouTube so we can refer back to it at a later point

                    var $url = tab.url;
                    var $temp = $url.split("/");
                    var $baseUrl = $temp[0] + "//" + $temp[2];
                    console.log($baseUrl);

                    if($baseUrl === "https://www.youtube.com") {
                        console.error("YouTube detected on tab " + tab.id + ". (" + tab.url + ")");
                    }
                });
            });
        });
    }



    function warnUserClosure($option) {
        // just a test
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
        // default js modal garbage
        var $confirmModal = confirm($msg);

        if ($confirmModal === true) {
            closeBrowser();
        } else {
            return false;
        }
    }

    function checkTabClosedDest($origin) {
        // to-do: ¯\_(ツ)_/¯
        return false;
    }

    function closeBrowser() {
        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.remove(tabs[i].id);
            }
        });
    }

});