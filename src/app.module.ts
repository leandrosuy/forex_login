import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://leandrosuy:12345672@cluster0.qw86boi.mongodb.net/?retryWrites=true&w=majority'),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
