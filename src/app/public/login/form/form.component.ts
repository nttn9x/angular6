import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  username: string;
  password: string;

  constructor() {}

  ngOnInit() {}
}
