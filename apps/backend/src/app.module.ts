import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { createConnectionString, schema } from 'db';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DrizzlePGModule.registerAsync({
      tag: 'DB_TAG',
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        const user = config.getOrThrow<string>('DB_USER');
        const password = config.getOrThrow<string>('DB_PASSWORD');
        const host = config.getOrThrow<string>('DB_HOST');
        const port = config.getOrThrow<string>('DB_PORT');
        const dbName = config.getOrThrow<string>('DB_NAME');

        return {
          pg: {
            connection: 'pool',
            config: {
              connectionString: createConnectionString(
                user,
                password,
                host,
                port,
                dbName,
              ),
            },
          },
          config: {
            schema: { ...schema },
          },
        };
      },
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule implements OnModuleInit {
  logger = new Logger(AppModule.name);

  constructor(private readonly config: ConfigService) {}

  async onModuleInit() {
    this.logger.log(
      `Server started on http://localhost:${this.config.getOrThrow('PORT')}`,
    );
  }
}
