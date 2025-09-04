import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'cop30connects',
            password: 'cop30connects',
            database: 'cop30connects',
            entities: [User],
            synchronize: true,
        }),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {
    private readonly connection = new Logger(DatabaseModule.name);
    constructor(private dataSource: DataSource) { }

    onModuleInit() {
        if (this.dataSource.isInitialized) {
            this.connection.log('Database already initialized');
            return;
        } else {
            this.connection.error('Database not initialized');
        }
    }
}