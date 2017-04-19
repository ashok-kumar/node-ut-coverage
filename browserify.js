'use strict';

var plugins = [];

plugins.push(['minifyify', {
    map: true
}]);

module.exports = function browserify(grunt) {

    grunt.loadNpmTasks('grunt-browserify');

    return {
        build: {
            files: {
                '.build/js/bundle.js': ['./dist/public/main.js']
            },
            options: {
                plugin: plugins,
                browserifyOptions: {
                    debug: true
                }
            }
        }
    };

};