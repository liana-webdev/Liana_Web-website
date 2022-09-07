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

const closePiano = document.getElementsByClassName('close-piano')[0];
const closeLwave = document.getElementsByClassName('close-lwave')[0];
const closeArch = document.getElementsByClassName('close-arch')[0];
const closeBentley = document.getElementsByClassName('close-bentley')[0];
const viewProjPiano = document.getElementsByClassName('vp-piano')[0];
const viewProjLwave = document.getElementsByClassName('vp-lwave')[0];
const viewProjArch = document.getElementsByClassName('vp-arch')[0];
const viewProjBentley = document.getElementsByClassName('vp-bentley')[0];

// Close project view
closePiano.addEventListener('click', () => {
  console.log('bye');
  viewProjPiano.classList.toggle('toggleOpacity');
});

closeLwave.addEventListener('click', () => {
  console.log('bye');
  viewProjLwave.classList.toggle('toggleOpacity');
});

closeArch.addEventListener('click', () => {
  console.log('bye');
  viewProjArch.classList.toggle('toggleOpacity');
});
closeBentley.addEventListener('click', () => {
  console.log('bye');
  viewProjBentley.classList.toggle('toggleOpacity');
});

// View Project
document.getElementById('seePianoLessons').addEventListener('click', () => {
  viewProjPiano.classList.toggle('toggleOpacity');
  console.log('hi');
});

document.getElementById('seeLwave').addEventListener('click', () => {
  viewProjLwave.classList.toggle('toggleOpacity');
  console.log('hi');
});

document.getElementById('seeArch').addEventListener('click', () => {
  viewProjArch.classList.toggle('toggleOpacity');
  console.log('arch');
});

document.getElementById('seeBentley').addEventListener('click', () => {
  viewProjBentley.classList.toggle('toggleOpacity');
  console.log('spur');
});
