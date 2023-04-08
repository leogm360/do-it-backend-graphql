import { GqlModuleAsyncOptions } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { PrismaService } from '@prisma';
import { PERMITED_ENVS, GRAPHQL_SCHEMA_FILE_PATH } from '@utils';
import { TConfigs, TNodeEnv } from '@types';

export const useGraphQLFactory: GqlModuleAsyncOptions['useFactory'] = (
  configs: ConfigService<TConfigs, true>,
  prisma: PrismaService,
) => {
  const NODE_ENV = configs.get<TNodeEnv>('env');

  const plugins = PERMITED_ENVS.includes(NODE_ENV)
    ? [ApolloServerPluginLandingPageLocalDefault()]
    : [ApolloServerPluginLandingPageProductionDefault()];

  return {
    autoSchemaFile: GRAPHQL_SCHEMA_FILE_PATH,
    playground: false,
    plugins,
    introspection: true,
    sortSchema: true,
    context: ({ req }) => ({ req, prisma }),
  };
};
