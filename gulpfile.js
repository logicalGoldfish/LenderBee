var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var reactify = require('reactify');
var browserify = require('browserify');
var del = require('del');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var minifyCSS = require('gulp-minify-css');
// var concat = require('gulp-concat');
// var watchify = require('watchify');
// var nodemon = require('gulp-nodemon');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');
// var karma = require('karma').server;
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');
// var eventStream = require('event-stream');
// var order = require('gulp-order');
// var mui = './node_modules/material-ui/src';

// DEVELOPMENT:
  // transform jsx into js
  // save output to dist/src
  // copy index.html from src to dist
  // watch changes to any js or html file and rerun
// PRODUCTION:
  // concat js files
  // minify result
  // output to LenderBee.js
  // replace script tags in index.html with one <script>

var path = {
  sources: {
    ENTRY_POINT: __dirname + '/client/src/main.jsx',
    HTML: [__dirname + '/client/index.html', __dirname + '/client/login.html'],
    CSS: __dirname + '/client/css/*.css',
    JS: [__dirname + '/client/src/*.js', __dirname + '/client/src/**/*.js'],
    ALL: [__dirname + '/client/src/*.js', __dirname + '/client/src/**/*.js', __dirname + '/client/css/*.css', __dirname + '/client/index.html', __dirname + '/client/login.html']
  },
  dest: {
    OUT: 'lenderbee.js',
    MINIFIED_OUT: 'lenderbee.min.js',
    DEST_SRC: 'client/dist/src',
    DEST_BUILD: 'client/dist/build',
    DEST: 'client/dist'
  },
  karmaConf: __dirname + '/karma.conf.js'
};


var handleError = function(err) {
  console.log('\nERROR MSG:', err.toString());
  this.emit('end');
};

/* Minifies the css
 */
gulp.task('css', function() {
  return gulp.src(path.sources.CSS)
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest(path.dest.DEST))
});

/* Deletes what's in dist
 */
gulp.task('clean', function(done) {
  del([path.dest.DEST], done);
});

/* Cleans up distribution files and concats/uglifies
 * the client Javascript/JSX files
 */
gulp.task('javascript', ['clean'], function() {
  return browserify({
    entries: [path.sources.ENTRY_POINT],
    transform: [reactify]
  })
  .bundle()
  .pipe(source(path.dest.OUT))
  .pipe(streamify(uglify(path.dest.MINIFIED_OUT)))
  .on('error', handleError)
  .pipe(gulp.dest(path.dest.DEST))
  .pipe(notify({message: 'Build task complete'}));
});

/* Copies the html files into distribution folder 
 * Do we need to replace anything in html files? gulp.useref or html-replace (better?)
 */
gulp.task('copy', function(){
  gulp.src(path.sources.HTML, {base: 'client/'}).pipe(gulp.dest(path.dest.DEST)); // copies main index.html
  // gulp.src(path.sources.html).pipe(gulp.dest(path.login.DEST)); // copies login's index.html
});


// Watches for changes and rebuilds production files
// [Warning] We need to figure out how to do this for our login's index.html
gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);
  gulp.watch(path.LESS_WATCH, ['less']); // [Refactor] I think we can get rid of this task

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function() {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
    console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

// Starts server and restarts on change
gulp.task('nodemon', function() {
  nodemon({
    script: 'server/app.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('restart');
});

/* Lints the distribution Javascript file
 */
gulp.task('lint', function() {
  return gulp.src(path.dest.OUT)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

/* Runs lint and Karma tests
 */
gulp.task('test', ['lint'], function(done) {
  karma.start({
    configFile: paths.karmaConf,
    singleRun: true
  }, function() {
    done();
  });
});



// Builds production files
gulp.task('production', ['javascript', 'copy', 'css']);

// Makes sure nodemon is run after build
gulp.task('server', ['test', 'watch'], function() {
  gulp.start('nodemon');
});

// Default gulp task
gulp.task('default', ['server']);