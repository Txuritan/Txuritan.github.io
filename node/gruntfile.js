module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../css/base.min.css': '../css/base.css'
                }
            }
        },
        less: {
            build: {
                files: {
                    '../css/base.css': 'less/base/base.less'
                }
            }
        },
        watch: {
            scripts: {
                files: 'less/**/*.less',
                tasks: ['less:build']
            }
        }
    });

    grunt.registerTask('default', ['less:build', 'watch']);
    grunt.registerTask('build', ['less:build', 'cssmin']);
};