import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  productForm = this.fb.group({});

  public password = '';
  public email = '';

  constructor(private fb: FormBuilder, public firebase: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    this.firebase.signInWithEmailAndPassword(this.email, this.password).then(result => {
      this.router.navigateByUrl('home-component');
    }).catch((error) => console.log('signIn error: ', error));
    if (this.email === '') {
      console.log('email empty - login');
    } else if (this.password === '') {
      console.log('password empty - login');
    }
  } // end of submitForm method
}
