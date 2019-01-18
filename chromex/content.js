// content.js
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//var firstHref = $("a[href^='http']").eq(0).text();

var wholepage = $("html").text();
$(document).ready(function() {
    $("a").click(function(event) {
        //alert("As you can see, the link no longer took you to jquery.com");
        var href = $(this).text();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://incubait.pythonanywhere.com/?user="+href, false);
        xhr.send();
        alert(xhr.responseText);

        //event.preventDefault();
    });
});
console.log(wholepage);
/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
*/
