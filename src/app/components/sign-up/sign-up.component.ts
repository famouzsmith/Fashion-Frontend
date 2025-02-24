import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SignupRequest } from '../../model/signup-request';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  //String, Boolean, number, date, currency, any, float
  header = "Sign-Up";
  SignupForm: FormGroup;

  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router){//reactive forms,handles user authentication logic,Navigation
    this.SignupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['', Validators.required]
    })

  }

  signup(){
    if(this.SignupForm.invalid){
      alert('Please fill out all fields.');
      return;
    }

    const formValue = this.SignupForm.value;

    //check if password match
    if(formValue.password !== formValue.confirmPassword){
      alert('passwords does not Match.');
      return;
    }

    const request: SignupRequest={
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword
    };

    this. auth.doSignup(request). subscribe({
      next: (res) => {
        console.log('Signup successful: ',res);
        alert('Signup Successful redirecting to login');
        this.router.navigate(['/login']);
      },
      error: (err)=>{
        console.error('Signup failed:', err);
        alert('Signup failed. please try again.');
      }
    })
  }

}
