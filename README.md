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

Copy the javascript from the iva-mmenu.js file and add into the head of your HTML page or enqueue the script in head of your page.
