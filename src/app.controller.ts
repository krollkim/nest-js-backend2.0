import { Controller, Get, Put, Delete, Param, ParseIntPipe} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('contacts')
export class AppController {
  

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


    @Put(":id/complete")
    async complete(@Param('id', new ParseIntPipe()) clientId: number){
        await this.appService.complete(clientId)
    }
    @Put(":id/undo")
    async undo(@Param('id', new ParseIntPipe()) clientId: number){
        await this.appService.undo(clientId);
    }

  @Delete(":id")
  removeFromDb(@Param('id', new ParseIntPipe()) contactId: number){
    return this.appService.removeContact(contactId);
  }


constructor(private appService: AppService) {}
 
}
