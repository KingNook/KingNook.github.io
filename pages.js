import * as Classes from './classes.js'

var pagenames = ['index', 'chess'];
export var pagelist = new Array(0);

pagenames.forEach(function(e) {
    let page = new Classes.Page(e, '/'+e);
    pagelist.push(page);
})

console.log(pagelist)