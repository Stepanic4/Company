/***************************************************************   SLIDER    *************************************************/
$(document).ready(function() {

  $('.slider').slick({
   dots: true,
   arrows: false
 });
});

$('.top-arrow').click(function() {
	$('html, body').animate({
		scrollTop: 0
	},600);
});
$('.class-1').animateNumber({
 number: 15
}, 2000);
$('.class-2').animateNumber({
 number: 194
}, 2000);
$('.class-3').animateNumber({
 number: 900
}, 2000);
$('.class-4').animateNumber({
 number: 450
}, 2000);
$('.class-5').animateNumber({
 number: 3
}, 2000);

/************************************************************   LOCAL   ************************************************************/

$('.current-value').click(function() {
  $(this).parent().toggleClass('active');
});

$('.custom-select ul li').click(function() {

  var currentLi = $(this).html();
  var currentValue = $(this).parent('.custom-select').find('.current-value').html();

  $(this).html(currentValue);

  $(this).parents('.custom-select').find('.current-value').html(currentLi);

  $(this).parents('.custom-select').removeClass('active');


});

$(document).click(function (event) {

 if (!$(event.target).closest('.custom-select').length) {
  $('.custom-select').removeClass('active'); 
}


});

/***************************************************************   LEFT-LIST  ******************************************************/

$('.Open-list').click(function() {
  $(this).parent().toggleClass('active');
});

$('.Left-list ul li').click(function() {

  var OpenlistLi = $(this).html();
  var Openlist = $(this).parent('.Left-list').find('.Open-list').html();

  $(this).html(Openlist);

  $(this).parents('.Left-list').find('.Open-list').html(OpenlistLi);

  $(this).parents('.Left-list').removeClass('active');


});

$(document).click(function (event) {

 if (!$(event.target).closest('.Left-list').length) {
  $('.Left-list').removeClass('active'); 
}

/***********************************************************   Burger   ********************************************************/

$('.fa-bars').click(function() {
  $('nav').toggleClass('active');
});

/************************************************************   WINDOW   ********************************************************/

 $('.callback').click(function() {
      $('.window').fadeIn();
    });

      $('.fa-close').click(function() {
      $('.window').fadeOut();
    });
  

  $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('fa-close')) $('.window').fadeOut();
    });

  
});