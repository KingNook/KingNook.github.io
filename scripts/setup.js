var head = document.getElementById('head');
var body = document.getElementById('body');

// favicon
var favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.href = '/images/favicon.ico';
favicon.type = 'image/x-icon';

// stylesheet
var styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.href = '/css/base.css';

// scripts
var scriptspace = document.createElement('div');

var scripts = [
    '/scripts/base.js',
    '/scripts/classes.js',
    '/scripts/colors.js',
    '/scripts/pages.js',
];

scripts.forEach(function(e){
    let scripttag = document.createElement('script');
    scripttag.src = e;
    scripttag.type = 'module';
    scriptspace.appendChild(scripttag);
})

body.appendChild(scriptspace);