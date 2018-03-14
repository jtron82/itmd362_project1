// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function submission() {
  alert("Thank You For Signing Up! You'll Receive Your First CatFact Soon!");
}