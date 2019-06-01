const backTopBtn = document.querySelector('.btn__scroll-up');
const banner = document.querySelector('.banner');
const header = document.querySelector('.header');

backTopBtn.addEventListener("click", function() {
    topFunction();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > banner.offsetTop + banner.scrollHeight 
    || document.documentElement.scrollTop > banner.offsetTop + banner.scrollHeight) {
    backTopBtn.style.display = "flex";
    header.classList.add('header__fixed');
  } else {
    backTopBtn.style.display = "none";
    header.classList.remove('header__fixed');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

