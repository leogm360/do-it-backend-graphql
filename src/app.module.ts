import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLResolversModule } from '@graphql/graphql-resolvers.module';
import { PrismaModule, PrismaService } from '@prisma';
import { useGraphQLFactory } from '@utils';
import { configs, configSchema } from '@configs';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configs],
      validationSchema: configSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService, PrismaService],
      useFactory: useGraphQLFactory,
    }),
    GraphQLResolversModule,
  ],
})
export class AppModule {}
