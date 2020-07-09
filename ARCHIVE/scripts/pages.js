import * as Classes from './classes.js'

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

// CONSOLE (For Text Adventure Games)
{
    let page = new Classes.Page('console', '/games/console');
    pagelist.push(page);
}

// CANVAS SHENENIGANS
{
    let page = new Classes.Page('canvas', '/canvas');
    pagelist.push(page)
}