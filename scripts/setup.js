// SETS UP SCRIPT TAGS AND NOTHING ELSE

var body = document.getElementById('body');

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