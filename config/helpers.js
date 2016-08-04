// ## Helpers methods for the webpack build process

var path = require('path');
var proc = require('process');

// Get the path to the root of the project
const ROOT = path.resolve(__dirname, '..');

// Build a path from the project root using the given array of strings
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}


function flatten(filename) {    
    process.argv.forEach(function(item) {
        if (item == 'flatten') {
            return '';
        }
    });

    return root(filename);
}


module.exports = {
    root: root,
    flatten: flatten
};

