/************************** NAV BAR **************************/

/* Toggle between adding and removing the "responsive"
class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/************************** SMOOTH SCROLL **************************/
document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener("click", function(e) {
      e.preventDefault();

      var targetId = this.getAttribute("href");

      if (targetId === "#") {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        // Update the URL to remove the hash
        window.history.pushState(null, null, window.location.pathname);
      } else {
        var targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          var offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });

          // Update the URL with the hash
          window.history.pushState(null, null, targetId);
        }
      }
    });
  });
});