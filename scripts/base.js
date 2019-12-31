import {pagelist} from '/scripts/pages.js';
import {colors} from '/scripts/colors.js';

// Create nav wrapper to reduce html file
var body = document.getElementById('body');
var navwrapper = document.createElement('div');


// Replace with json file for centralised page storage
var pages = pagelist;

// Create navbar
var navbar = document.createElement('ul');
navbar.className = 'nav-bar'
navbar.style.backgroundColor = colors.orange;

var current_page = window.location.pathname;

pages.forEach(function(e) {
    let navitem = document.createElement('li');
    navitem.className = 'nav-item';
    if(e.path == current_page) {
        navitem.className += 'active';
    }

    let navlink = document.createElement('a');
    navlink.className = 'nav-link';
    navlink.setAttribute('href', e.path);
    navlink.innerHTML = e.name;
    navitem.appendChild(navlink);
    navbar.appendChild(navitem);
})

navwrapper.appendChild(navbar);
body.appendChild(navwrapper);