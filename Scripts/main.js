/**
*CONFIG
*/
require.config({
    env: "PROD",
    prodEnvPrefix: ".min"
});


/**
*MAIN ENTRY POINT
*/
requirejs(["Modules/simplemodule"], function (simplemodule) {

});
