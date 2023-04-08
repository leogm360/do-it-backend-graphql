import * as Joi from 'joi';
import { TConfigs, TNodeEnv } from '@types';

const NODE_ENVS: TNodeEnv[] = ['dev', 'test', 'stage', 'prod'];

export const configSchema = Joi.object<TConfigs>({
  env: Joi.string()
    .valid(...NODE_ENVS)
    .default('dev'),
  port: Joi.number().default(3000),
});
