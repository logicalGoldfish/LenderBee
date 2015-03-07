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
var watchify = require('watchify');
var nodemon = require('gulp-nodemon');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');
var karma = require('karma').server;
// var rename = require('gulp-rename');
// var eventStream = require('event-stream');
// var order = require('gulp-order');
// var mui = './node_modules/material-ui/src';


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
    DEST_SRC: 'client/dist',
    DEST_BUILD: 'client/dist/build',
    DEST: 'client/dist'
  },
  karmaConf: __dirname + '/karma.conf.js'
};


var handleError = function(err) {
  console.log('\nERROR MSG:', err.toString());
  this.emit('end');
};

// Browserifies client jsx files
var bundler = watchify(browserify({
  entries: [path.sources.ENTRY_POINT],
  transform: [reactify],
  debug: true,
  cache: {}, packageCache: {}, fullPaths: true
}));

var bundleIt = function() {
  return bundler.bundle()
    .on('error', function(err) {
      console.log('\nBrowserify Error', err);
    })
    .pipe(source(path.dest.OUT))
    .pipe(streamify(uglify(path.dest.MINIFIED_OUT)))
    .on('error', handleError)
    .pipe(gulp.dest(path.dest.DEST_SRC))
    // .pipe(gulp.notify({message: 'Watch rebundled'}));
};

// bundler.on('update', bundleIt);

gulp.task('js', bundleIt);

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
  gulp.start('js');
  // browserify({
  //   entries: [path.sources.ENTRY_POINT],
  //   transform: [reactify]
  // })
  // .bundle()
  // .pipe(source(path.dest.OUT))
  // .pipe(streamify(uglify(path.dest.MINIFIED_OUT)))
  // .on('error', handleError)
  // .pipe(gulp.dest(path.dest.DEST_SRC))
  // .pipe(notify({message: 'Build task complete'}));

});

/* Copies the html files into distribution folder 
 * Replace anything in html files? gulp.useref or html-replace (better?)
 */
gulp.task('copy', function(){
  gulp.src(path.sources.HTML, {base: 'client/'}).pipe(gulp.dest(path.dest.DEST)); // copies main index.html
  // gulp.src(path.sources.html).pipe(gulp.dest(path.login.DEST)); // copies login's index.html
});


// Watches for changes and rebuilds production files
// [Warning] We need to figure out how to do this for our login's index.html
gulp.task('rebuild', function() {
  gulp.watch(path.HTML, ['copy']);
  gulp.watch(path.LESS_WATCH, ['less']); // [Refactor] I think we can get rid of this task

  return bundler.on('update', function() {
    bundler.bundle()
      .pipe(source(path.dest.OUT))
      .pipe(streamify(uglify(path.dest.MINIFIED_OUT)))  
      .pipe(gulp.dest(path.dest.DEST_SRC));
    console.log('\nUpdated');
  })
    .bundle()
    .pipe(source(path.dest.OUT))
    .pipe(streamify(uglify(path.dest.MINIFIED_OUT)))  
    .pipe(gulp.dest(path.dest.DEST_SRC));
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
    configFile: path.karmaConf,
    singleRun: true
  }, function() {
    done();
  });
});

gulp.task('copySemantic', function(done){
  gulp.src('client/dist/bower_components/semantic-ui/dist/semantic.min.css').pipe(gulp.dest(path.dest.DEST));
    console.log(('from inside gulp', path.dest.DEST));
});

gulp.task('copySemanticJS', function(done){
  gulp.src('client/dist/bower_components/semantic-ui/dist/semantic.min.js').pipe(gulp.dest(path.dest.DEST));
    console.log(('from inside gulp', path.dest.DEST));
});

// Builds production files
gulp.task('production', ['javascript'], function() {
  gulp.start('copy', ['css']);
});

gulp.task('testProduction', ['production'], function() {
  gulp.start('test');
})

gulp.task('watch', function() {
  gulp.start('rebuild');
})


// Makes sure nodemon is run after build
gulp.task('server', ['watch'], function() {
  gulp.start('nodemon');
});

// Default gulp task
gulp.task('default', ['server']);