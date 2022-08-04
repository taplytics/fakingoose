"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = exports.Mocker = void 0;
const generate_1 = require("./generate");
class Mocker {
    constructor(model, options = {}) {
        this.schema = isModel(model) ? model.schema : model;
        this.options = options;
        this.globalOptions = {};
    }
    setGlobalObjectIdOptions(options) {
        this.globalOptions.objectid = options;
        return this;
    }
    setGlobalDecimal128Options(options) {
        this.globalOptions.decimal128 = options;
        return this;
    }
    generate(staticFields = {}, overrideOptions = undefined) {
        return (0, generate_1.generate)(this.schema, {
            options: overrideOptions || this.options,
            staticFields,
            globalOptions: this.globalOptions,
        });
    }
}
exports.Mocker = Mocker;
function factory(modelOrSchema, options = {}) {
    return new Mocker(modelOrSchema, options);
}
exports.factory = factory;
function isModel(m) {
    return m.schema !== undefined;
}
