var body = document.getElementbyId('body');

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