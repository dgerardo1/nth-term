import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { NthTermService } from 'src/app/services/nth-term.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  result: any;
  subscription: Subscription;

  constructor(private nthTermService: NthTermService){
    this.subscription = this.nthTermService.getResult()
                        .subscribe(result => { 
                          this.result = result;
                          console.log('RESULT', this.result); 
                        });
  }


}
