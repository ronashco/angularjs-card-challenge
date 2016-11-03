'use strict';
module.exports = function (grunt) {
  // scripts
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/style.css': 'scss/index.scss'
        }
      }
    },
    autoprefixer: {
      compile: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    }
  });


  //load tasks and register tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['sass', 'autoprefixer', 'connect', 'watch']);
};
