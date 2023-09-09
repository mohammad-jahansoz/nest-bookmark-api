import { Module } from '@nestjs/common';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import Users from './entities/user.entity';

@Module({
  imports: [
    BookmarksModule,
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Users]),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
