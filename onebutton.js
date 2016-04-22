$(document).ready(function () {
  var operatingSystem, userAgentString = navigator.userAgent;
var link = $("#store");

if (userAgentString.indexOf("iPhone") > -1 || userAgentString.indexOf("iPod") > -1 || userAgentString.indexOf("iPad") > -1) {
    operatingSystem = "iOS";
    link.attr("href", "https://itunes.apple.com/in/app/uber/id368677368?mt=8&ign-mpt=uo%3D4");
} else if (/Android/.test(userAgentString)) {
    operatingSystem = "Android";
    link.attr("href", "https://play.google.com/store/apps/details?id=com.nobroker.app&hl=en");
} else if (/Windows Phone/.test(userAgentString)) {
    operatingSystem = "Windows Phone";
    link.attr("href", "<link>");
}
});