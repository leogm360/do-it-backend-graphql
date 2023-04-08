import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { TConfigs, TNodeEnv } from '@types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService<TConfigs, true>>(ConfigService);

  const port = configService.get<number>('port');
  const env = configService.get<TNodeEnv>('env');

  await app.listen(port, () => {
    if (env === 'dev') {
      console.log('\n🚀 Server is running on: http://localhost:3000/graphql');
    }
  });
}

bootstrap();
