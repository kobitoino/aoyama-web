(function () {
  if (typeof window.hdm === 'undefined') {
    window.hdm = {};
  }

  if (typeof window.hdm.index === 'undefined') {
    window.hdm.index = {};
  }

  var i = window.hdm.index;

  $(function () {
    setTimeout (i.note001, 3000);
    setTimeout (i.note002, 6000);
    setTimeout (i.note003, 9000);
    setTimeout (i.note004, 12000);
  });

  i.note001 = function () {
    var d = document,
    n1 = d.getElementById('note001'),
    nR = 170,
    nT = 100;
    $('#note001').fadeIn(3000);
    timerID = setInterval (
      function () {
        nR = nR + 0.2 * (Math.random () * 5);
        n1.style.right = nR + 'px';
        nT = nT + 0.1 * (Math.random () * 5);
        n1.style.top = nT + 'px';
        if (nT >= 260) {
          i.note001.reverse();
          clearInterval(timerID); 
        }
      }
      ,50);
    i.note001.reverse = function () {
      timerIDR = setInterval (
          function () {
            nR = nR + 0.2 * (Math.random () * 5);
            n1.style.right = nR + 'px';
            nT = nT - 0.1 * (Math.random () * 5);
            n1.style.top = nT + 'px';
            if (nR >= 900) {
              clearInterval(timerIDR);
              $('#note001').fadeOut(500);
            }
          }
      ,50);
    };
  };


  i.note002 = function () {
    var d = document,
    n1 = d.getElementById('note002'),
    nR = 170,
    nT = 100;
    $('#note002').fadeIn(3000);
    timerID = setInterval (
      function () {
        nR = nR + 0.2 * (Math.random () * 5);
        n1.style.right = nR + 'px';
        nT = nT + 0.1 * (Math.random () * 5);
        n1.style.top = nT + 'px';
        if (nT >= 260) {
          i.note002.reverse();
          clearInterval(timerID); 
        }
      }
      ,50);
    i.note002.reverse = function () {
      timerIDR = setInterval (
          function () {
            nR = nR + 0.2 * (Math.random () * 5);
            n1.style.right = nR + 'px';
            nT = nT - 0.1 * (Math.random () * 5);
            n1.style.top = nT + 'px';
            if (nR >= 900) {
              clearInterval(timerIDR);
              $('#note002').fadeOut(500);
            }
          }
      ,50);
    };
  };

  i.note003 = function () {
    var d = document,
    n1 = d.getElementById('note003'),
    nR = 170,
    nT = 100;
    $('#note003').fadeIn(3000);
    timerID = setInterval (
      function () {
        nR = nR + 0.2 * (Math.random () * 5);
        n1.style.right = nR + 'px';
        nT = nT + 0.1 * (Math.random () * 5);
        n1.style.top = nT + 'px';
        if (nT >= 260) {
          i.note001.reverse();
          clearInterval(timerID); 
        }
      }
      ,50);
    i.note003.reverse = function () {
      timerIDR = setInterval (
          function () {
            nR = nR + 0.2 * (Math.random () * 5);
            n1.style.right = nR + 'px';
            nT = nT - 0.1 * (Math.random () * 5);
            n1.style.top = nT + 'px';
            if (nR >= 900) {
              clearInterval(timerIDR);
              $('#note003').fadeOut(500);
            }
          }
      ,50);
    };
  };
  
  i.note004 = function () {
    var d = document,
    n1 = d.getElementById('note004'),
    nR = 170,
    nT = 100;
    $('#note004').fadeIn(3000);
    timerID = setInterval (
      function () {
        nR = nR + 0.2 * (Math.random () * 5);
        n1.style.right = nR + 'px';
        nT = nT + 0.1 * (Math.random () * 5);
        n1.style.top = nT + 'px';
        if (nT >= 260) {
          i.note001.reverse();
          clearInterval(timerID); 
        }
      }
      ,50);
    i.note004.reverse = function () {
      timerIDR = setInterval (
          function () {
            nR = nR + 0.2 * (Math.random () * 5);
            n1.style.right = nR + 'px';
            nT = nT - 0.1 * (Math.random () * 5);
            n1.style.top = nT + 'px';
            if (nR >= 900) {
              clearInterval(timerIDR);
              $('#note004').fadeOut(500);
            }
          }
      ,50);
    };
  };

}());
