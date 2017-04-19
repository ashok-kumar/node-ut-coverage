'use strict';


module.exports = function less(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-less');

    // Options
    return {
        build: {
            options: {
                cleancss: false
            },
            files: {
                '.build/css/app.css': 'src/public/css/app.less'
            }
        }
    };

};
