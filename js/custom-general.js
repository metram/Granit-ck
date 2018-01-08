// On Document Ready initialise the options 
jQuery(document).ready(function($){
"use strict";

/* Mobile Navigation */
$(function(){
	$('#sub-nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	closeOnClick:true
	});
});
/* Mobile Navigation */

/* Tool Tip */
$("[data-toggle=tooltip]").tooltip();
/* Tool Tip */
/* Back to top */
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
<!-- // Back to top -->

<!-- // Past Obituary Start-->          
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
<!-- // Past Obituary End-->   

<!-- // Top bar Start -->        
  function topBarSize() {
    var el = $('.top-bar .container');
    el.css( {
      'display' : 'none',
      'height'  : 'auto' 
    }).attr('data-height', el.height()).attr('style', 'height: 0;').parent().removeClass('open');
  }

  $('.top-bar .close').on('click', function() {
    var el = $('.top-bar');
    var child = $('.top-bar .container');
    el.toggleClass('open');  

    if( el.hasClass('open') ) {
      child.height(child .attr('data-height'));
    } else {
      child.attr('style', 'height: 0;');
    }
  });
  topBarSize();
  $(window).resize(function() {
    topBarSize();
  });
<!-- // Top bar End-->    

/*************************************************************
             Contact Form Start
**************************************************************/	
	  $('#contact_form').validate(
		{
		rules: {
		name: {
		minlength: 2,
		required: true
		},
		phone: {
		required: true,
		},
		email: {
		required: true,

		email: true
		},
		subject: {
		minlength: 2,
		required: true
		},
		message: {
		minlength: 2,
		required: true
		}
		},
		highlight: function(element) {
		$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
		},
		submitHandler: function(form) {
						// do other stuff for a valid form
						$.post('contact-general-form.php', $("#contact_form").serialize(), function(data) { // action file is here 
							$('#contact_form').html(data);
						});
					}
		});
/******************  Contact Form END******************/

});  // End DOM Ready Function



// WOW Init Reveal Animation  
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
   wow.init();
//   
// wow end 