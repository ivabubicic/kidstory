import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;

  public email = '';
  public password = '';
  public checkPassword = '';

  constructor(private fb: FormBuilder, private firebaseAuth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {

    const {maxLength, minLength} = Validators;

    this.validateForm = this.fb.group({
      email: [this.email, [Validators.email, Validators.required]],
      password: [this.password, [Validators.required, minLength(8)]],
      checkPassword: ['', [Validators.required, minLength(8)]],
    });
  }

  updateConfirmValidator() {
  }

  submitForm(): void {
    this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password).then(result =>
      console.log('User registered successfully'));
    this.validateForm.reset();
    if (this.email === '') {
      console.log('email empty - register');
    } else if (this.password === '') {
      console.log('password empty - register');
    }
    alert('You registered successfully!');
    this.router.navigateByUrl('login-component');
  }
}
