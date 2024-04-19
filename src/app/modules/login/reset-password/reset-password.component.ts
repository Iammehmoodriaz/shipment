import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Messages } from 'src/app/helpers';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  validationMessages = Messages.validation_messages;
  key=""
  constructor(
    public formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,) {
      this._router.routerState.root.queryParams.subscribe(params => {
        if (params['key']) {
          let param = decodeURIComponent(params['key']);
          this.key=param;
        }
      });
     }

  ngOnInit() {
    this.validateForm();
  }
  validateForm() {
    this.form = this.formBuilder.group({
      password: new FormControl("", Validators.required),
      confirm_password: new FormControl("", Validators.required),
      key:new FormControl("")
    });
  }
  ResetPassword(){
    
  }
}
