var pages = ['index', 'chess'];

var navbar = document.createElement('ul');

pages.forEach(function(e) {
    let navitem = document.createElement('li').appendChild(document.createElement('a'));
    navitem.setAttribute('href', '/'+e);
    navitem.innerHTML = e;
    navbar.appendChild(navitem);
})

document.getElementById('navbar').appendChild(navbar);