import { MessagesService } from './messages.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const msg = await this.messagesService.findOne(id);

    if (!msg) {
      throw new NotFoundException('message not found');
    }
    return msg;
  }
}
