import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

import Swal from 'sweetalert2';

import { NthTermService } from 'src/app/services/nth-term.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  number = new FormControl()

  constructor(private nthTermService: NthTermService){}

  checkNumber(number: number){
    console.log('CHECK NUMBER', number);
    if (number !== 3) {
      return Swal.fire('Error', 'No has ingresado un número primo múltiplo de 3', 'error');
    }
    return this.calculateResult(number);
  }

  calculateResult(number:number) {
    this.nthTermService.calculateResult(number);
  }
}
