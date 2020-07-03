import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    const { required, maxLength, minLength } = Validators;

    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required, maxLength(20), minLength(2)]],
      lastName: ['', [Validators.required, maxLength(20), minLength(2)]],
      username: ['', [Validators.required, minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, minLength(8)]],
      checkPassword: ['', [Validators.required, minLength(8)]],
    });
  }

  updateConfirmValidator() {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
