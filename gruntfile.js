module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        },
        options: {
          includePaths: [
            require('bourbon').includePaths,
            require("bourbon-neat").includePaths
          ]
        }
      }
    },
    nunjucks: {
        precompile: {
            baseDir: 'views/templates/',
            src: 'views/templates/*',
            dest: 'public/js/templates.js'
        }
    },
    watch: {
      source: {
        files: ['views/sass/**/*.scss', 'templates/**/*.html'],
        tasks: ['views/sass', 'nunjucks']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-nunjucks');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
