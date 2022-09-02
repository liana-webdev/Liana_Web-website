const toggleButton = document.getElementsByClassName('toggle-navbar')[0];
const navbarLinks = document.getElementsByClassName('navbar-list')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');

  toggleButton.classList.toggle('changeIcon');
});

// ** Play every time

var animateHTML = function () {
  var elems;
  var windowHeight;

  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }

      if (positionFromTop - windowHeight > 1 || positionFromTop < 0) {
        elems[i].className = elems[i].className.replace(
          'fade-in-element',
          'hidden'
        );
      }
    }
  }

  return {
    init: init,
  };
};

// ** Play once

(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden-once');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden-once');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

// * View project

const closePrev = document.getElementsByClassName('close')[0];
const viewProj = document.getElementsByClassName('view-proj')[0];

document.getElementById('seePianoLessons').addEventListener('click', () => {
  viewProj.classList.toggle('toggleOpacity');
  console.log('hi');
});

closePrev.addEventListener('click', () => {
  console.log('bye');
  viewProj.classList.toggle('toggleOpacity');
});
