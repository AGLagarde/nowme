// TYPING EFFECT
var obj = [
    {
      txt: "Hé coucou",
      heightScroll: 350, 
      dom: ".ia-dialog1"
    },
    {
      txt: "On ne se connait pas encore, mais ça ne saurait tarder...",
      heightScroll: 1700, 
      dom: ".ia-dialog2"
    }
  ]
  
  
  function typing(objet) {
    var speed = 50; 
    var scrollIndicator = 0;
    var i = 0 ;
  
    var callType = function(){
      window.addEventListener('resize', function(){
        var windowWidth = document.body.clientWidth;
        if (windowWidth > 768) {
          scrollIndicator = objet.heightScroll;
        } else {
          scrollIndicator = 0;
        }
      });
      if (window.scrollY >= scrollIndicator) {
        typeWriter();
        window.removeEventListener("scroll", callType);
      }
      
    }
    var bot = document.querySelectorAll(objet.dom);
    for (let i = 0; i < bot.length; i++) {
      let parent = bot[i].parentNode;
      window.addEventListener("scroll", callType);
    }
    function typeWriter() {
      if (i < objet.txt.length) {
        document.querySelector(objet.dom + "--content").innerHTML += objet.txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  
  typing(obj[0]);
  typing(obj[1]);
  