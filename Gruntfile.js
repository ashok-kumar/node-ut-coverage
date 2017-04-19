'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });
    
    // Register group tasks
    // grunt.registerTask('build', ['clean:dist', 'eslint', 'babel', 'browserify', 'less', 'copyto']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);
 

};
