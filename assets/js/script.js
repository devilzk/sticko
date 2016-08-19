$(document).ready(function(){

    /* # Show spinner untill everything's loaded. */
    $('.spinner').show();

    /* # Make videos responsive. */
    $('.post').fitVids();

    /* # Open/close menu. */
	$('.nav-control').click(function(){
		$('body').toggleClass('nav-open');
	});

    /* Make specific links open in a new window in a HTML5 valid way */
	$('a[rel*="external"]').click(function(){
		$(this).attr('target', '_blank');
	})

});

$(window).load(function(){

    /* # All loaded, hide spinner. */
	$('.spinner').hide();

});

// Load highlight.js first!

$(function() {
    // You may or may not need this
    hljs.configure({useBR: true});

    // Highlight all pre elements on the page
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});