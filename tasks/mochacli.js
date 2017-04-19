'use strict';


module.exports = function mochacli(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-cli');

    // Options
    return {
        src: ['test/**/*.js'],
        options: {
            coverage: true,
            noColors: true,
            dryRun: false,
            timeout: 6000,
            'check-leaks': true,
            ui: 'bdd',
            reporter: 'spec',
            reportFormats: ['html','lcovonly']
        }
    };
};
