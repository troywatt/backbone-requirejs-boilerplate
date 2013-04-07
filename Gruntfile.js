
module.exports = function( grunt ){
    "use strict";

    grunt.loadNpmTasks( 'grunt-exec' );


    grunt.initConfig({

        exec: {
            build: {
                command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
            }
        }

    });


    grunt.registerTask( 'default', [
        'exec'
    ]);
};