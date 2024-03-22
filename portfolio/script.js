document.addEventListener("DOMContentLoaded", function() {

const aboutMeLink = document.querySelector('a[href="#about_me"]');

const aboutMeSection = document.getElementById('about_me');

// Add click event listener to the "About Me" link
aboutMeLink.addEventListener('click', function(event) {
  
    aboutMeSection.classList.add('active');
    setTimeout(function() {
        aboutMeSection.classList.remove('active');
      }, 1000); 
})

});
