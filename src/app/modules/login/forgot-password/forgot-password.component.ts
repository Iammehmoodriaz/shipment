import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Messages, Patterns } from 'src/app/helpers';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  validationMessages = Messages.validation_messages;
  constructor(
    public formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,) { }

  ngOnInit() {
    this.validateForm();
  }
  validateForm() {
    this.form = this.formBuilder.group({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern(Patterns.emailRegex)]))
    });
  }
  RequestPassword(){
   
  }

}
