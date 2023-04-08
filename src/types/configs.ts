export type TNodeEnv = 'dev' | 'test' | 'stage' | 'prod';

export type TConfigs = {
  env: TNodeEnv;
  port: number;
};
