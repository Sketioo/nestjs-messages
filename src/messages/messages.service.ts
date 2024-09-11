import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

interface Repository {
  findOne(id: string): object;
  findAll(): object;
  create(content: string): void;
}

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    const msg = this.messagesRepo.findOne(id);
    return msg;
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    this.messagesRepo.create(content);
  }
}
