if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}
import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<string>('PORT');
  await app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
}
bootstrap();
