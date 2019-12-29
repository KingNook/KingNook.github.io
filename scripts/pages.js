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
    let page = new Classes.Page('chess', '/games/chess');
    pagelist.push(page);
}

console.log(pagelist);