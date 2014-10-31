MobileMenu
==========

New Mobile Menu WordPress Themes

Wrap The Menu Trigger Icon
<div class="mobile-menu-wrap"><a href="#" class="iva-mobile-dropdown"></a></div>

Add the menu list with a class 'iva_mmenu'

<ul class="iva_mmenu" id="menu-primary-menu">
    <li class="current-menu-ancestor">
    <a href="#">Home<span class="iva-children-indenter"><i class="fa fa-angle-down"></i></span></a>
        <ul class="sub-menu" style="display: none;">
        	<li class="menu-item"><a href="#">Menu Item</a></li>
        	<li class="menu-item"><a href="#">Menu Item</a></li>
        	<li class="menu-item"><a href="#">Menu Item</a></li>
        </ul>
    </li>
    <li class="menu-item">
    <a href="#">Menu Item<span class="iva-children-indenter"><i class="fa fa-angle-down"></i></span></a>
    </li>
</ul>

Add the javascript into the head of your HTML page.

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
