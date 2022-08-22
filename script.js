function reveal() { //Płynna animacja elementów podczas scrollowania
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function createCookieEN() {
  document.cookie = "language=en;expires=Thu, 01 Jan 2222 00:00:01 GMT;path=/";
}

function createCookiePL() {
  document.cookie = "language=pl;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}



window.addEventListener("load", () => {
  
  const windowWidth = window.innerWidth;
  const webLang = window.navigator.language;
  console.log(webLang)
  currentPage = window.location.href;

 // if (windowWidth > '900') {
  if (webLang != 'pl' && currentPage.indexOf("en") == -1 && document.cookie.match('en') == null) {
    window.location.replace("../en/index.html")
  }
 // }
});



