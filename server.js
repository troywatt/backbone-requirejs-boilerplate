/**
 * Module dependencies.
 */

var express = require( 'express' )
    , routes = require( './routes' )
    , http = require( 'http' )
    , path = require( 'path' );

var app = express();

app.configure( function () {
    app.set( 'port', process.env.PORT || 3000 );
    app.set( 'views', __dirname + '/views' );
    app.set( 'view engine', 'jade' );
    app.use( express.favicon() );
    app.use( express.logger( 'dev' ) );
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
    app.use( app.router );

    app.use( express.static( path.join( __dirname, 'node_modules' ) ) );
    app.use( express.static( path.join( __dirname, 'app' ) ) );

    // test harness
    app.use( express.static( path.join( __dirname, 'test' ) ) );

} );

app.configure( 'development', function () {
    app.use( express.errorHandler() );
} );

app.get( '/', routes.index );

app.get( '/test', routes.test );

http.createServer( app ).listen( app.get( 'port' ), function () {
    console.log( "Express server listening on port " + app.get( 'port' ) );
} );
