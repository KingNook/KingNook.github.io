var head = document.getElementById('head');
var body = document.getElementById('body');

// favicon
var favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.href = '/images/favicon.ico';
favicon.type = 'image/x-icon';
head.appendChild(favicon);

// stylesheet - UNNECESSARY (use- @import)
var stylespace = document.createElement('div');

var styles = [
    '/css/base.css'
];

styles.forEach(function(e){
    let styletag = document.createElement('link');
    styletag.rel = 'stylesheet';
    styletag.href = e;
    stylespace.appendChild(styletag);
});
head.appendChild(stylespace);

// scripts
var scriptspace = document.createElement('div');

var scripts = [
    '/scripts/base.js',
    '/scripts/classes.js',
    '/scripts/pages.js'
];

scripts.forEach(function(e){
    let scripttag = document.createElement('script');
    scripttag.src = e;
    scripttag.type = 'module';
    scriptspace.appendChild(scripttag);
})

body.appendChild(scriptspace);