(function($){  "use strict";
	// Define your library strictly...
	jQuery(document).ready(function ($) {

		jQuery('.iva-mobile-dropdown').click(function(){
			jQuery('.iva-mobile-menu').slideToggle(500);
			return false;
		});
        
		// Child Menu Toggle
		jQuery('.iva-children-indenter').click(function(){
			jQuery(this).parent().parent().toggleClass('iva-menu-open');
			jQuery(this).parent().parent().find('> ul').slideToggle();
			return false;
		});
	
	});
})();
