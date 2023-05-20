import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 7000
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('NEST1')
      .setDescription('doc API')
      .setVersion('1.0.0')
      .addTag('nest')
      .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api/docs', app,document)

  await app.listen(PORT,()=>console.log('server started on port'+PORT));
}
bootstrap();
