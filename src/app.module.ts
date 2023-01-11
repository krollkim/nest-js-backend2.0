import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactControler } from './contact/contact.controller';
import { Contact } from './contact/contact.entity';
import { ContactService } from './contact/contact.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'full-stack',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    logging: true,
  }),
  TypeOrmModule.forFeature([Contact]),
  
],
  controllers: [
    AppController,
    ContactControler,
    ],
  providers: [
    AppService,
    ContactService,
   ],
})
export class AppModule {}