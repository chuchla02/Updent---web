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
  const windowWidth = window.innerWidth;
  const webLang = window.navigator.language;
  const currentPage = window.location.href;
  const Width = window.innerWidth;
  const phoneWidth = 780;

  console.log(Width)

    if (Width > phoneWidth) {
      if (webLang != 'pl' && currentPage.indexOf("/en/") == -1 && document.cookie.match('pl') == null) {
        window.location.replace("../en/index.html");
      } } else if (Width < phoneWidth) {
        if (webLang != 'pl-PL' && currentPage.indexOf("/en/") == -1 && document.cookie.match('pl') == null) {
            window.location.replace("../en/index.html");
  }
}
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