System.register("app/main", ["jquery", "lodash/fp/forEach"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1, forEach_1;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (forEach_1_1) {
                forEach_1 = forEach_1_1;
            }
        ],
        execute: function () {
            exports_1("default", function () { return forEach_1.default(function (x) { return window.alert(jquery_1.default(x).html('<big>hello</big>')); }, jquery_1.default('div').toArray()); });
        }
    };
});
System.register("index", ["app/main"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var main_1;
    return {
        setters: [
            function (main_1_1) {
                main_1 = main_1_1;
            }
        ],
        execute: function () {
            main_1.default();
        }
    };
});
//# sourceMappingURL=bundle.js.map