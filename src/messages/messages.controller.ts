import { MessagesService } from './messages.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  msgService: MessagesService;

  constructor() {
    this.msgService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.msgService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    this.msgService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    const msg = this.msgService.findOne(id);
    return msg;
  }
}
