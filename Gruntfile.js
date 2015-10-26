module.exports = function(grunt) {
  grunt.initConfig({
    distFolder: './',
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass'],
        options: {
          debounceDelay: 250
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './scss',
          src: ['*.scss'],
          dest: './css',
          ext: '.css'
        }]
      }
    }
  }); 

  grunt.registerTask('default', ['sass']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};