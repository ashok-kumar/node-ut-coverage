'use strict';

module.exports = function babel(grunt) {

    grunt.loadNpmTasks('grunt-babel');

    return {
        options: {
            sourceMap: false,
            presets: ['react','es2015'],
            plugins: ['babel-plugin-add-module-exports',
                      'babel-plugin-transform-es2015-modules-commonjs',
                      'babel-plugin-transform-async-to-generator'],
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.js', '**/*.jsx'],
                dest: 'dist'
            }]
        }
    };
};