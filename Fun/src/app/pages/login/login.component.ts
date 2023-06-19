import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: FormGroup;
  wrongPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    // private auth: AuthGuard
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    // Initialization code here
  }

  submitForm() {
    if (this.form.valid) {
      this.userService.signIn(this.form.value).subscribe({
        next: (data) => {
          const accessToken = data.accessToken;
          localStorage.setItem('token', accessToken);

          this.router.navigate(['/products']);
          localStorage.setItem('user', JSON.stringify(data));
          this.wrongPassword = false;
        },
        error: (err) => {
          this.wrongPassword = true;
        },
      });
    
    }
  }

  passwordMatchValidator(form: FormGroup) {
    //   const password = form.get('password');
    //   const confirmPassword = form.get('confirmPassword');
    //   if (password.value !== confirmPassword.value) {
    //     confirmPassword.setErrors({ mismatch: true });
    //   } else {
    //     confirmPassword.setErrors(null);
    //   }
    // }
  }

}
