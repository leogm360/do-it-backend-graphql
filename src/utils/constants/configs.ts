import { TNodeEnv } from '@types';

export const DISPONIBLE_NODE_ENVS: TNodeEnv[] = [
  'dev',
  'test',
  'stage',
  'prod',
];

export const PERMITED_ENVS: TNodeEnv[] = ['dev', 'test', 'stage'];

export const DEFAULT_PORT = 3000;

export const DEFAULT_ENV: TNodeEnv = 'dev';

export const GRAPHQL_SCHEMA_FILE_PATH = 'schema.graphql';
