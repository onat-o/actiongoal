System.register(['angular2/platform/browser', './actiongoal.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, actiongoal_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (actiongoal_component_1_1) {
                actiongoal_component_1 = actiongoal_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(actiongoal_component_1.ActiongoalComponent);
        }
    }
});
//# sourceMappingURL=main.js.map