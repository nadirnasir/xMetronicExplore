var gulp = require('gulp');
var build = require('./build');
var replace = require('gulp-replace');
var func = require('./helpers');

// Original path to find everything starting from 'inc/api...
 const PREG_APIURL = new RegExp(/["|'\/](inc\/api.*?)["|']/); 

// Find anything between ' and inc/api
//const PREG_APIURL = new RegExp(/["|'\/](http:\/\/.*?)inc\/api/);

var apiUrlCallback = function (full, part) {
  // Prepend host url
   return full.replace(part, build.config.path.demo_api_url + part); 

  // Replace host url
  // return full.replace(part, build.config.path.demo_api_url);

};

// Gulp task to find api path and convert to absolute url
gulp.task('apiurl', function () {
  build.config.dist.forEach(function (path) {
    var output = '';
    if (path.indexOf('**') !== -1) {
      func.getDemos().forEach(function (demo) {
        output = path;
        output = output.replace('**', demo);
        gulp.src(output + '/**/*js').pipe(replace(PREG_APIURL, apiUrlCallback)).pipe(gulp.dest(output));
      });
    } else {
      output = path;
      gulp.src(output + '/**/*js').pipe(replace(PREG_APIURL, apiUrlCallback)).pipe(gulp.dest(output));
    }
  });
});