var pages = ['index', 'chess'];

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