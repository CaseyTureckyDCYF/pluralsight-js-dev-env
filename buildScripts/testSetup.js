//register bable 
require('babel-register')();

//disable webpack extensaion that framework does not understand
require.extensions['.css'] = function() {};