module.exports = function (grunt) {

  var appConfig = grunt.file.readJSON('package.json');

  // Load grunt tasks automatically
  // see: https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  // see: https://npmjs.org/package/time-grunt
  require('time-grunt')(grunt);

  var pathsConfig = function (appName) {
    this.app = appName || appConfig.name;

    return {
      app: this.app,
      css: 'css',
      sass: 'sass',
      fonts: 'fonts',
      images: 'images',
      js: 'js',
    }
  };

  grunt.initConfig({

    paths: pathsConfig(),
    pkg: appConfig,

    // see: https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      compass: {
        files: ['<%= paths.sass %>/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      livereload: {
        files: [
          '<%= paths.js %>/**/*.js',
          '<%= paths.sass %>/**/*.{scss,sass}',
          '<%= paths.app %>/**/*.html'
          ],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },

    // see: https://github.com/gruntjs/grunt-contrib-compass
    compass: {
      options: {
          sassDir: '<%= paths.sass %>',
          cssDir: '<%= paths.css %>',
          fontsDir: '<%= paths.fonts %>',
          imagesDir: '<%= paths.images %>',
          relativeAssets: false,
          assetCacheBuster: false,
          raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          environment: 'production'
        }
      },
      server: {
        options: {
          // debugInfo: true
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'compass:dist'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
