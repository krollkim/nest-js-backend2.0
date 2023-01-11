import { Controller, Post, Get, Body } from "@nestjs/common";
import { Contact } from "./contact.entity";
import { ContactService } from "./contact.service";

@Controller('contact')
export class ContactControler {

    @Get()
    getResponse(){
        return this.service.getRep();
    }

    @Post()
    async addContact(@Body() item: Contact){
       return  this.service.addContact(item)
    }

    constructor(private service: ContactService) {}
}