// src/auth/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Recherche un utilisateur par email
  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  // Crée un nouvel utilisateur
  async createUser(createUserDto: { email: string; password: string }): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
}
