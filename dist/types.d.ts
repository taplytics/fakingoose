import { Model, Schema, Document, HydratedDocument } from "mongoose";
import { Mocker } from "./mocker";
declare type ValueCallback = (mockObject: Document) => any;
export declare type MockerFieldOption = SkipFieldOptions | FieldValueOptions | StringFieldOptions | SizeFieldOptions | ObjectIdFieldOptions<any>;
export interface SkipFieldOptions {
    /**
     * When this option is present the field is skipped
     */
    skip: boolean;
}
export interface FieldValueOptions {
    /**
      * If the value
      * is a function, then the function receives the current mock
      * object as first argument and returns a value
      */
    value: (string | number | boolean | ValueCallback);
}
export interface StringFieldOptions {
    /**
      * Is only used for string fields
      * example a string can have the types email, firstname or lastname
      */
    type: 'email' | 'firstname' | 'lastname';
}
export interface SizeFieldOptions {
    /**
      * Is only used for array fields
      */
    size: number;
}
export declare type ObjectIdFieldOptions<T extends Document> = PopulateWithFactory<T> | PopulateWithSchema<T>;
export interface PopulateWithFactory<K, T extends HydratedDocument<K> = HydratedDocument<K>> {
    populateWithFactory: Mocker<K, T>;
}
export interface PopulateWithSchema<T extends Document> {
    populateWithSchema: Model<T> | Schema;
}
export declare function isStringFieldOptions(o: MockerFieldOption): o is StringFieldOptions;
export declare function isPopulateWithFactory<T extends Document>(o: MockerFieldOption): o is PopulateWithFactory<T>;
export declare function isPopulateWithSchema<T extends Document>(o: MockerFieldOption): o is PopulateWithSchema<T>;
export interface FactoryOptions {
    [k: string]: MockerFieldOption;
}
export declare type GlobalDecimal128Options = {
    /**
     * Auto convert value to string
     */
    tostring: boolean;
};
export declare type GlobalObjectIdOptions = {
    /**
     * Auto convert value to string
     */
    tostring: boolean;
};
export declare type GlobalOptions = {
    objectid?: GlobalObjectIdOptions;
    decimal128?: GlobalDecimal128Options;
};
export {};
