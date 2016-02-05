var Funnel      = require('broccoli-funnel');
var Babel       = require('broccoli-babel-transpiler');
// var SourceMap   = require('broccoli-source-map');
var MergeTrees  = require('broccoli-merge-trees');
var BrowserSync = require('broccoli-browser-sync');

var mainFile = new Funnel('src', { files: ['index.html'] });

var jsDir = 'src/js';
var scripts = Babel(jsDir, {
  sourceMaps: 'inline'
});

var browserSync = new BrowserSync([mainFile, scripts]);

module.exports = MergeTrees([scripts, mainFile, browserSync]);
