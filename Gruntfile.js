module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    pkg: pkg,
    stylus: {
      all: {
        options: {
          urlfunc: 'url',
          use: [require('normalize'), require('nib')]
        },
        files: {
          'public/css/style.css': "css/index.styl"
        }
      }
    },
    concat: {
      app: {
        src: [
          'app/main.js',
          'app/controllers/*.js',
          'app/directives/*.js'
        ],
        dest: 'public/js/app.js'
      },
      vendors: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/slick-carousel/slick/slick.js',
          'bower_components/jQuery.dotdotdot/src/js/jquery.dotdotdot.js'
        ],
        dest: 'public/js/vendors.js'
      }
    },
    copy: {
      bower_components: {
        files: [
          // includes files within path
          {expand: true, cwd: 'bower_components/font-awesome/css', src: ['font-awesome.min.css'], dest: 'public/css/libs', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/slick-carousel/slick', src: ['slick.css'], dest: 'public/css/libs', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['bootstrap.min.css'], dest: 'public/css/libs', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['bootstrap-theme.min.css'], dest: 'public/css/libs', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/slick-carousel/slick', src: ['slick-theme.css'], dest: 'public/css/libs', filter: 'isFile'}
        ]
      }
    },
    watch: {
      all: {
        files: ['css/**/*.styl','app/**/*.js'],
        tasks: ['build','concat'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('build', ['copy', 'stylus']);
  return grunt.registerTask('default', ['watch']);
};