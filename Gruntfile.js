'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            src: ['<%= pkg.main %>'],
            test: ['test/*.js']
        },
        shell: {
            'npm-publish': {
                options: { stdout: true },
                command: 'npm publish'
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('default', ['lint']);
    grunt.registerTask('deploy', ['lint', 'shell:npm-publish']);
};