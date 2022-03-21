import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = new FormGroup({
    password: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }

  guardarDatos() {
    console.log(this.usuario.value);
  }

}
