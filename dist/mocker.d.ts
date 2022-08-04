import { Model, Schema, HydratedDocument } from 'mongoose';
import { FactoryOptions, GlobalOptions, GlobalObjectIdOptions, GlobalDecimal128Options } from './types';
export declare class Mocker<K, T extends HydratedDocument<K>> {
    schema: Schema<K>;
    globalOptions: GlobalOptions;
    options: FactoryOptions;
    constructor(model: Schema<K> | Model<K>, options?: FactoryOptions);
    setGlobalObjectIdOptions(options: GlobalObjectIdOptions): this;
    setGlobalDecimal128Options(options: GlobalDecimal128Options): this;
    generate(staticFields?: Record<string, unknown>, overrideOptions?: FactoryOptions): T;
}
export declare function factory<K, T extends HydratedDocument<K> = HydratedDocument<K>>(modelOrSchema: Schema<K> | Model<K>, options?: FactoryOptions): Mocker<K, T>;
