"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ComponentB = (function (_super) {
    tslib_1.__extends(ComponentB, _super);
    function ComponentB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentB.prototype.doSomething = function (values) {
        return values;
    };
    ComponentB.prototype.render = function () {
        return React.createElement("div", null);
    };
    return ComponentB;
}(React.Component));
exports.ComponentB = ComponentB;
