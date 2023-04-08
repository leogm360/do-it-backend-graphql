import * as Joi from 'joi';
import { PERMITED_ENVS, DEFAULT_ENV, DEFAULT_PORT } from '@utils';
import { TConfigs } from '@types';

export const configSchema = Joi.object<TConfigs>({
  env: Joi.string()
    .valid(...PERMITED_ENVS)
    .default(DEFAULT_ENV),
  port: Joi.number().default(DEFAULT_PORT),
});
