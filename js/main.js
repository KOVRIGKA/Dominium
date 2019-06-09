var backTopBtn = document.querySelector('.btn__scroll-up');
var banner = document.querySelector('.banner');
var header = document.querySelector('.header');
var btnQuestion = document.querySelector('.btn .btn-link');
// var plus = document.addEventListener('anwer__figure-plus')

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

(function accordion($) {
    $('.btn.btn-link').click(function onClick() {
      var el = $(this);
      $('.answers__figure').each(function(index) {
        if (el.data('id') !== index) $(this).removeClass('after-invisible');
      });
      el.find('.answers__figure').toggleClass('after-invisible');
    })
})($);

(function header($) {
  $('.nav-item.nav-link').click(function onClick() {
    $('.navbar-toggler').trigger('click');
  })
})($);

function sendOrder() {
	const firstForm = document.querySelector('#firstForm');
    const sendFirstForm = document.querySelector('#sendFirstForm');

	  sendFirstForm.addEventListener('click', function (event) {
		event.preventDefault();

		let url = myForm.getAttribute('action');
		let method = myForm.getAttribute('method');
		let formData = new FormData(firstForm);

		formData.append('name', myForm.elements.name.value);
		formData.append('phone', myForm.elements.phone.value);
		formData.append('to', 'info@dominium.ru');

		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open(method, url);
		xhr.send(formData);

		// const overlay = createOverlay(document.querySelector('#overlayTemplate').innerHTML);
		// xhr.addEventListener('load', () => {
		// 	overlay.open();
		// 	if (xhr.status === 200) {
		// 		const message = xhr.response.message;
		// 		overlay.setContent('', message);
		// 	} else {
		// 		const message = 'УПС! Ошибочка! Попробуйте снова!';
		// 		overlay.setContent('', message);
		// 	}
		// });
	});
};