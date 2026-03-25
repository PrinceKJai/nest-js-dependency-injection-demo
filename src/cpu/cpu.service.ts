import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private readonly powerService: PowerService) {
        
    }
    compute(a:number, b: number) {
        console.log("computing...")
        this.powerService.supplyPower(1000);
        return a+b;
    }
}
