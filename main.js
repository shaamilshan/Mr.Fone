const a_tag = document.querySelector("#sms")

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;


  if (/android/i.test(userAgent)) {
    window.location.replace("android.html")

  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.replace("/ios.html")
  }

}

getMobileOperatingSystem();
console.log(a_tag.getAttribute("href"));