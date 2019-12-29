import {pagelist} from './pages.js'

// Replace with json file for centralised page storage
var pages = pagelist;

// Create navbar
var navbar = document.createElement('ul');

pages.forEach(function(e) {
    let navitem = document.createElement('li');
    let navlink = document.createElement('a');
    navlink.setAttribute('href', e.url);
    navlink.innerHTML = e.name;
    navitem.appendChild(navlink);
    navbar.appendChild(navitem);
})

document.getElementById('navbar').appendChild(navbar);