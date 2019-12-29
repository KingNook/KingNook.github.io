import * as Classes from './classes.js'

var pagenames = ['index', 'chess'];
export var pagelist = new Array(0);

// INDEX
{
    let page = new Classes.Page('index', '/index');
    pagelist.push(page);
}

// CHESS
{
    let page = new Classes.Page('chess', '/chess');
    pagelist.push(page);
}

// TEST (DELETE LATER)
{
    let page = new Classes.Page('test', '/test/test');
    pagelist.push(page);
}

console.log(pagelist);