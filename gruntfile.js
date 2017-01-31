module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'views/sass/application.scss'
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
      express: {
        files:  ['**/*.js', '!public/**/*.js'],
        tasks:  ['express:dev'],
        options: {
          spawn: false
        }
      },
      source: {
        files: ['views/sass/**/*.scss', 'templates/**/*.html'],
        tasks: ['sass', 'nunjucks']
      },
      public: {
        files: ['public/html/**/*.*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-nunjucks');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('server', [ 'express:dev', 'watch' ])
};
