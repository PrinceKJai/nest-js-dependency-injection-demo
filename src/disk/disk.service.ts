import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private readonly powerService: PowerService) {}
    getData() {
        console.log("calling getdata")
        this.powerService.supplyPower(2000);
        return "data";
    }
}
