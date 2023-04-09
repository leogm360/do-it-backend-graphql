import { Module } from '@nestjs/common';
import user from './useCases/User';
import address from './useCases/Address';

@Module({
  providers: [...user, ...address],
  exports: [...user, ...address],
})
export class GraphQLResolversModule {}
