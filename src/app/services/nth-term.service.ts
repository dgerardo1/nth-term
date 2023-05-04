import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NthTermService {
  private subjectResult = new Subject<any>();

  calculateResult(number: number){
    const a = number;
    const b = a - 3;
    this.subjectResult.next({ 
      a,
      b
    });
  }

  getResult(): Observable<any>{
    return this.subjectResult.asObservable();
  }
}
