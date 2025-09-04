import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    create(userData: Partial<User>) {
        const user = this.userRepo.create(userData);
        return this.userRepo.save(user);
    }

    async remove(id: number) {
        await this.userRepo.delete(id);
        return { deleted: true };
    }
}
