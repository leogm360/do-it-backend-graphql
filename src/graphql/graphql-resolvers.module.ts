import { Module } from '@nestjs/common';
import user from './useCases/User';

@Module({
  providers: [...user],
  exports: [...user],
})
export class GraphQLResolversModule {}
