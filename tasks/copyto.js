'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'src/public/images/',
                src: ['**/*'],
                dest: '.build/images/'
            },{
                cwd: 'src/public/js/',
                src: ['**/*'],
                dest: '.build/js/'
            }]
        }
    };

};
