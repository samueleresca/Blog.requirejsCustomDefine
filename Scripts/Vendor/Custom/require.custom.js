/**
*CONTAINS OVERLOAD DEFINE
*/

envDefine = function (name, deps, callback) {
    "use strict";
    //Get personalized config options
    var currentEnv = requirejs.s.contexts._.config.env;
    var envPrefix = requirejs.s.contexts._.config.prodEnvPrefix;

    //Only deps and callback specified
    if (name instanceof Array) {
        define(toEnvDeps(name), deps, callback);
    }
    //name, deps and callback specified
    if (deps instanceof Array) {
        define(name, toEnvDeps(deps), callback);
    }

    function toEnvDeps(edeps) {
        var envDeps = edeps;
        if (edeps instanceof Array) {
            for (var i = 0; i < edeps.length; i++) {
                if (currentEnv != 'LOCAL') {
                    envDeps[i] = edeps[i] + envPrefix;
                }
            }
        }

        return envDeps;
    }
}
