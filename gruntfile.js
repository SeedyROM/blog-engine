module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        }
      }
    },
    nunjucks: {
        precompile: {
            baseDir: 'templates/',
            src: 'templates/*',
            dest: 'public/js/templates.js'
        }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'templates/**/*.html'],
        tasks: ['sass', 'nunjucks']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-nunjucks');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
