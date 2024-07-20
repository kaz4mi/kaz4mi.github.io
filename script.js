let today = new Date,
	bday = new Date("18 February 2006"),
	years = today - bday;
document.getElementById("age")
	.innerHTML = new Date(years)
	.getFullYear() - 1970
// JavaScript
$('#menu-opener').click(function() {
  $('body').addClass('menu-open');
  $('.btn-close-menu').click(function() {
    $('body').removeClass('menu-open');
  });
  $('.overlay').click(function() {
    $('body').removeClass('menu-open');
  });
  $('.main-navigation').prepend('');
  $('.main-navigation ul .menu-item-has-children').app
});
