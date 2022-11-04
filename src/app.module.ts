import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './apis/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mat-db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mat-data',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true
    })
  ],
  controllers: [AppController]})
export class AppModule {}
