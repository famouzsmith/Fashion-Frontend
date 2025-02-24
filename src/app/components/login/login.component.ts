import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Loginmodel } from '../../model/Loginmodel';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { LoginRequest } from '../../model/login-request';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService, private router:Router) {}

  userForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  request : LoginRequest = new LoginRequest;

  login(){
    const formValue = this.userForm.value;  

    if(this.userForm.invalid){
      alert('Please fill in all fields correctly');
      //this.router.navigate(['sign-up']);
      return;
    }

    const LoginRequest= {
      username: formValue.username, 
      password: formValue.password
    }
    

    console.log("Sending Request:", LoginRequest);

    this.auth.doLogin(this.request).subscribe({
      next:(res) =>{
        console.log("Login Successful:", res);
        alert('Login successful! Redirecting.....');
        this.router.navigate(['/dashboard']);// route to dashboard after login
      }, 
      
      error: (err) => {
        console.log("Login Error:", err);
        alert('Invalid credentials. Please try again')

      }
    })
  }

}
