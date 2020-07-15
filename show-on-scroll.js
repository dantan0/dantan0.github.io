// Detect request animation frame
// if requestAnimationFrame isn't available in the browser,
// waits one-sixties of a second before callback
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

// select elements with class "show-on-scroll"
var elementsToShow = document.querySelectorAll('.show-on-scroll');

// set up a basic loop
function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  // scroll the element
  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // check if jQuery is defined
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  // return the size of the element and its position relative to the viewport
  var rect = el.getBoundingClientRect();

  // return true if the element is on the page
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
