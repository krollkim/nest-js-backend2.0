import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Contact } from "./contact.entity";

@Injectable()
export class ContactService {

    addContact(item: Contact) {
        item.id = null;
        item.createTime = Date();
        return this.rep.save(item);
    }

    getRep(){
        return this.rep.find()
    }
    
    constructor(@InjectRepository(Contact) private rep: Repository<Contact>) {}
}
