import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AppController } from './app.controller';
import { Contact } from './contact/contact.entity';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

    async complete(id: number){
      const item = await this.rep.findOne({where: {id}});
      item.isCompleted = true;
      this.rep.save(item);
  }

  async undo(id: number){
      const item = await this.rep.findOne({where: {id}});
      item.isCompleted = false;
      this.rep.save(item);
  }

  removeContact(id: number){
    this.rep.delete(id)
  }

  constructor(
    @InjectRepository(Contact)
    private rep: Repository<Contact>
    ) { }
}