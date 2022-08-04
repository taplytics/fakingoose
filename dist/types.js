"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPopulateWithSchema = exports.isPopulateWithFactory = exports.isStringFieldOptions = void 0;
function isStringFieldOptions(o) {
    return o.type !== undefined;
}
exports.isStringFieldOptions = isStringFieldOptions;
function isPopulateWithFactory(o) {
    return o.populateWithFactory !== undefined;
}
exports.isPopulateWithFactory = isPopulateWithFactory;
function isPopulateWithSchema(o) {
    return o.populateWithSchema !== undefined;
}
exports.isPopulateWithSchema = isPopulateWithSchema;
