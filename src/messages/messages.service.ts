import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    //* Dont do this!! we must use depedency injection!
    this.messagesRepo = new MessagesRepository();
  }

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
