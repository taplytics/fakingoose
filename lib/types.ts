import { Model, Schema, Document, HydratedDocument } from "mongoose";
import { Mocker } from "./mocker";

type ValueCallback = (mockObject: Document) => any;

export type MockerFieldOption = SkipFieldOptions | FieldValueOptions | StringFieldOptions | SizeFieldOptions | ObjectIdFieldOptions<any>;
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

export type ObjectIdFieldOptions<K, T extends HydratedDocument<K> = HydratedDocument<K>> = PopulateWithFactory<K> | PopulateWithSchema<K>

export interface PopulateWithFactory<K, T extends HydratedDocument<K> = HydratedDocument<K>> {
  populateWithFactory: Mocker<K, T>
}

export interface PopulateWithSchema<K, T extends HydratedDocument<K> = HydratedDocument<K>> {
  populateWithSchema: Model<K> | Schema
}

export function isStringFieldOptions(o: MockerFieldOption): o is StringFieldOptions {
  return (o as StringFieldOptions).type !== undefined
}


export function isPopulateWithFactory<K, T extends HydratedDocument<K> = HydratedDocument<K>>(o: MockerFieldOption): o is PopulateWithFactory<K> {
  return (o as PopulateWithFactory<T>).populateWithFactory !== undefined
}

export function isPopulateWithSchema<K, T extends HydratedDocument<K> = HydratedDocument<K>>(o: MockerFieldOption): o is PopulateWithSchema<K> {
  return (o as PopulateWithSchema<T>).populateWithSchema !== undefined
}

export interface FactoryOptions {
  [k: string]: MockerFieldOption;
}

export type GlobalDecimal128Options = {
  /**
   * Auto convert value to string
   */
  tostring: boolean;
}

export type GlobalObjectIdOptions = {
  /**
   * Auto convert value to string
   */
  tostring: boolean;
}

export type GlobalOptions = {
  objectid?: GlobalObjectIdOptions;
  decimal128?: GlobalDecimal128Options;
}
