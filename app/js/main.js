
requirejs.config({

    baseUrl: 'js',

    paths: {

    },

    shim: {

    }
});


require(
    [ 'app' ],
    function( App ){
        "use strict";

        window.bTask = new App();
    }
);