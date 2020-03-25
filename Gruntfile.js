module.exports = function(grunt) {
 
    require('time-grunt')(grunt);
   
    require('load-grunt-config')(grunt, {
      jitGrunt: true
    });
  };



  grunt.initConfig({
    grunt.registerTask('default', ['imagemin']);
  });