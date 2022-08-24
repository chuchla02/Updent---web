function createCookieEN() {
  document.cookie = "language=en;expires=Thu, 01 Jan 2222 00:00:01 GMT;path=/";
}

function createCookiePL() {
  document.cookie = "language=pl;expires=Thu, 01 Jan 2222 00:00:01 GMT;path=/";
}

function backWithCookie() {
  const cookiePL = document.cookie.match('pl');
  const cookieEN = document.cookie.match('en');

    if (cookiePL == 'pl') {
      return 0;
  } else if (cookieEN == 'en') {
      window.location.replace("../en/index.html");
  }
}

function redirect() {
  const webLang = window.navigator.language;
  const webLang2 = window.navigator.language
  const currentPage = window.location.href;
  const Width = window.innerWidth;
  const phoneWidth = 960;

    /*if (Width > phoneWidth) {
      if (webLang != 'pl' && currentPage.indexOf("/en/") == -1 && document.cookie.match('pl') == null) {
        window.location.replace("../en/index.html");
      } } else if (Width < phoneWidth) {
        if (webLang != 'pl-PL' && currentPage.indexOf("/en/") == -1 && document.cookie.match('pl') == null) {
            window.location.replace("../en/index.html");
    }
  }*/

	if ((webLang != 'pl-PL' || webLang2 != 'pl') && currentPage.indexOf("/en/") == -1 && document.cookie.match('pl') == null) {
    window.location.replace("../en/index.html");
  }
  console.log(webLang)
}
window.addEventListener("load", redirect)

window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
  let windowHeight = window.innerHeight;
  let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

window.addEventListener("scroll", () => {
  const button = document.getElementById('backbutton');
  const y = window.scrollY;
  const showHeight = 110;

  if (y > showHeight) {
    button.classList.remove("hidden"); 
  } else { 
    button.classList.add("hidden"); 
  }
});