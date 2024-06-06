// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Text to animate
  var text = "Web Developer";
  var textNode = document.getElementById("animated-text");
  var index = 0;
  var isDeleting = false;
  function animateText() {
    var speed = 100;

    // Check if text is being deleted or typed
    if (isDeleting) {
      // Remove a character
      textNode.textContent = text.substring(0, index - 1);
    } else {
      // Add a character
      textNode.textContent = text.substring(0, index + 1);
    }

    // Increment or decrement index
    if (isDeleting) {
      index--;
    } else {
      index++;
    }

    // Toggle isDeleting flag
    if (index === text.length) {
      isDeleting = true;
      // Wait before deleting
      speed = 2000;
    } else if (index === 0) {
      isDeleting = false;
    }

    // Recursive call
    setTimeout(animateText, speed);
  }

  // Start animation
  animateText();
});

// bars
