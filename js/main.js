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

function sendFirstOrder() {
	const firstForm = document.querySelector('#firstForm');
    const sendFirstForm = document.querySelector('#sendFirstForm');

	  sendFirstForm.addEventListener('click', function (event) {
		event.preventDefault();

		if (validateForm(firstForm)){
			let url = firstForm.getAttribute('action');
			let method = firstForm.getAttribute('method');
			let formData = new FormData(firstForm);
	
			formData.append('name', firstForm.elements.name.value);
			formData.append('phone', firstForm.elements.phone.value);
			formData.append('to', 'info@dominium.ru');
	
			const xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.open(method, url);
			xhr.send(formData);
		}
		
		function validateForm(form){
			let valid = true;

			if(!validateField(form.elements.name)){
				valid = false;
			}

			if(!validateField(form.elements.phone)){
				valid = false;
			}

			return valid;
		}

		function validateField(field){
			if (!field.checkValidity()){
				field.nextElementSibling.textContent = field.validationMessage;
				return false;
			} else {
				field.nextElementSibling.textContent = '';
				return true;
			}
		}
	});
};
sendFirstOrder();

function sendSecondOrder() {
	const secondForm = document.querySelector('#secondForm');
    const sendSecondForm = document.querySelector('#sendSecondForm');

	sendSecondForm.addEventListener('click', function (event) {
		event.preventDefault();

		if (validateForm(secondForm)){
			let url = secondForm.getAttribute('action');
			let method = secondForm.getAttribute('method');
			let formData = new FormData(secondForm);
		
			formData.append('housingType', secondForm.elements.housingType.value);
			formData.append('roomNumber', secondForm.elements.roomNumder.value);
			formData.append('metro', secondForm.elements.metro.value);
			formData.append('floorNumber', secondForm.elements.floorNumber.value);
			formData.append('floor', secondForm.elements.floor.value);
			formData.append('name', secondForm.elements.name.value);
			formData.append('mail', secondForm.elements.mail.value);
			formData.append('phone', secondForm.elements.phone.value);    
			formData.append('to', 'info@dominium.ru');
	
			const xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.open(method, url);
			xhr.send(formData);
		}

		function validateForm(form){
			let valid = true;

			if(!validateField(form.elements.housingType)){
				valid = false;
			}

			if(!validateField(form.elements.roomNumder)){
				valid = false;
			}

			if(!validateField(form.elements.metro)){
				valid = false;
			}

			if(!validateField(form.elements.floorNumber)){
				valid = false;
			}

			if(!validateField(form.elements.floor)){
				valid = false;
			}

			if(!validateField(form.elements.name)){
				valid = false;
			}

			if(!validateField(form.elements.mail)){
				valid = false;
			}

			if(!validateField(form.elements.phone)){
				valid = false;
			}

			return valid;
		}

		function validateField(field){
			if (!field.checkValidity()){
				field.nextElementSibling.textContent = field.validationMessage;
				return false;
			} else {
				field.nextElementSibling.textContent = '';
				return true;
			}
		}
	});
};
sendSecondOrder();

function sendThirdOrder() {
	const thirdForm = document.querySelector('#thirdForm');
    const sendThirdForm = document.querySelector('#sendthirdForm');

	  sendThirdForm.addEventListener('click', function (event) {
		event.preventDefault();

		let url = thirdForm.getAttribute('action');
		let method = thirdForm.getAttribute('method');
		let formData = new FormData(thirdForm);

		formData.append('name', thirdForm.elements.name.value);
		formData.append('phone', thirdForm.elements.phone.value);
		formData.append('to', 'info@dominium.ru');

		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open(method, url);
		xhr.send(formData);
	});
};
sendThirdOrder();