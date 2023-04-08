import { TConfigs, TNodeEnv } from '@types';

export const configs = (): TConfigs => {
  const PORT = Number(process.env.PORT) || 3000;
  const NODE_ENV = process.env.NODE_ENV as TNodeEnv;

  return {
    env: NODE_ENV,
    port: PORT,
  };
};
