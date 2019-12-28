import {Page} from './classes.js'

// Replace with json file for centralised page storage
var pages = ['index', 'chess'];

// Create navbar
var navbar = document.createElement('ul');

pages.forEach(function(e) {
    let navitem = document.createElement('li');
    let navlink = document.createElement('a');
    navlink.setAttribute('href', '/'+e);
    navlink.innerHTML = e;
    navitem.appendChild(navlink);
    navbar.appendChild(navitem);
})

document.getElementById('navbar').appendChild(navbar);