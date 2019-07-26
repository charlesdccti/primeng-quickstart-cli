import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  val1: number;
  msg: string;
  val2: string;
  date3: Date;


  constructor() { }

  ngOnInit() {
  }

  handleRate(event) {
      this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
      this.msg = 'Rating Cancelled';
  }

}
