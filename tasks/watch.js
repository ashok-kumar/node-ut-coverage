'use strict';


module.exports = function watch(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Options
	return {
        files: [
            'src/public/views/**/*.jsx',
            'src/public/views/*.jsx',
            'src/routes/*.js'
        ],
        tasks: ['build']
    };



    // Options
    // return {
    //     public: {
    //         files: [
    //             'src/public/css/**/*.less',
    //             'src/public/js/**/*.js',
    //             'src/public/js/**/*.jsx',
    //             'src/public/templates/**/*.dust',
    //             'src/public/views/**/*.jsx',
    //             'src/public/stores/*.js',
    //             'src/public/actions/*.js',
    //             'src/routes/*.js'
    //         ],
    //         tasks: ['build']
    //     }

    // };
};
