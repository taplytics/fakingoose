import { Schema, HydratedDocument } from 'mongoose';
import { FactoryOptions, GlobalOptions, MockerFieldOption } from './types';
export declare type GeneratorOptions = {
    options: MockerFieldOption;
    staticFields: Record<string, unknown>;
    globalOptions: GlobalOptions;
};
declare type GenerateOptions = {
    options: FactoryOptions;
    staticFields: Record<string, unknown>;
    globalOptions: GlobalOptions;
};
export declare function generate<K, T extends HydratedDocument<K>>(schema: Schema<K>, opts: GenerateOptions): T;
export {};
