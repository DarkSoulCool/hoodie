module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt)

  // Project configuration.
  grunt.initConfig({

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: 'jshint'
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'lib/**/*.js',
        'bin/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    simplemocha: {
      options: {
        reporter: 'spec',
        ignoreLeaks: true
      },
      full: { src: ['test/runner.js'] }
    },

    nodeunit: {
      all: ['test/test-*.js']
    }

  });

  // Default task.
  grunt.registerTask('default', [
    'jshint',
    'nodeunit:all',
    'simplemocha:full'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'nodeunit:all',
    'simplemocha:full'
  ]);

};
