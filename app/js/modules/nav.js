var navItem = document.querySelectorAll(".nav--wrap-item");
var scrollTotal = document.querySelector("body").scrollHeight;
var i = 0;
var pourcentageY = 0;

window.addEventListener("scroll", function() {
  let scrollHauteur = window.scrollY;
  pourcentageY = Math.round((scrollHauteur /= scrollTotal) * 100);
  if (pourcentageY == 0 || pourcentageY == 9) {
    i = 0;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
  } else if (pourcentageY > 9) {
    navItem[0].style.fontSize = "20px";
  }

  if (pourcentageY == 10 || pourcentageY == 29) {
    i = 1;
    navItem[i].style.fontSize = "40px";
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "#6D3EFF";
    }
  } else if (10 > pourcentageY || pourcentageY > 29) {
    navItem[1].style.fontSize = "20px";
  }

  if (pourcentageY == 30 || pourcentageY == 66) {
    i = 2;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "white";
    }
    if (pourcentageY == 30 || pourcentageY == 49) {
      navItem[i].style.fontSize = "40px";
    }
  } else if (30 > pourcentageY || pourcentageY > 49) {
    navItem[2].style.fontSize = "20px";
  }

  if (pourcentageY == 50 || pourcentageY == 66) {
    i = 3;
    navItem[i].style.fontSize = "40px";
  } else if (50 > pourcentageY || pourcentageY > 66) {
    navItem[3].style.fontSize = "20px";
  }

  if (pourcentageY == 67) {
    i = 4;
    for (var y = 0; y < navItem.length; y++) {
      navItem[y].style.color = "#6D3EFF";
    }
    navItem[i].style.fontSize = "40px";
  } else if (pourcentageY < 67) {
    navItem[4].style.fontSize = "20px";
  }
});
