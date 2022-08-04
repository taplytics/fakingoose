import {
    Model,
    Schema,
    HydratedDocument
} from 'mongoose';

import { generate } from './generate';
import { FactoryOptions, GlobalOptions, GlobalObjectIdOptions, GlobalDecimal128Options } from './types'

export class Mocker<K, T extends HydratedDocument<K>> {
  schema: Schema<K>
  globalOptions: GlobalOptions;
  options: FactoryOptions;

  constructor(model: Schema<K> | Model<K>, options: FactoryOptions = {}) {
    this.schema = isModel(model) ? model.schema : model;
    this.options = options;
    this.globalOptions = {};
  }

  setGlobalObjectIdOptions(options: GlobalObjectIdOptions) {
    this.globalOptions.objectid = options;
    return this;
  }

  setGlobalDecimal128Options(options: GlobalDecimal128Options) {
    this.globalOptions.decimal128 = options;
    return this;
  }

  generate(staticFields: Record<string,unknown> = {}, overrideOptions: FactoryOptions = undefined) {
    return generate<K, T>(this.schema, {
      options: overrideOptions || this.options,
      staticFields,
      globalOptions: this.globalOptions,
    });
  }
}

export function factory<K, T extends HydratedDocument<K> = HydratedDocument<K>>(modelOrSchema: Schema<K> | Model<K>, options: FactoryOptions = {}): Mocker<K, T> {
  return new Mocker<K, T>(modelOrSchema, options);
}

function isModel<K, T extends HydratedDocument<K>>(m: Model<K> | Schema<K>): m is Model<K> {
  return (m as Model<K>).schema !== undefined;
}
