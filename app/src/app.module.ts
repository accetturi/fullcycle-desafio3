import { Module, ParseBoolPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Category } from './models/category.model';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      //host: process.env.TYPEORM_HOST,
      //port: parseInt(process.env.TYPEORM_PORT),
      //username: process.env.TYPEORM_USERNAME,
      //password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      loggin: process.env.TYPEORM_LOGGING,
      synchronize: (process.env.TYPEORM_SYNCHRONIZE == 'true'),
      entities: [Category],
    }),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
