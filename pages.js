import * as Classes from './classes.js'

var pagenames = ['index', 'chess'];
var pagelist = new Array;

pagenames.forEach(function(e) {
    let page = new Classes.Page(e, '/'+e);
    pagelist.push(page);
})

console.log(pagelist)