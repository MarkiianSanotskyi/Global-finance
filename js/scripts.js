/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#6E6E78" });
 });
 
 /*menu*/
<!--$(".nav li").first().addClass('home');-->


jQuery(document).ready(function() {
    // Initialise the first and second carousel by class selector.
	// Note that they use both the same configuration options (none in this case).
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1
    });
});

$(document).ready(function(){
 new WOW().init();
 
 });
 
  $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })
