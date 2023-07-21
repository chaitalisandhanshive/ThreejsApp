import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {}

  loginForm= new FormGroup({
    userEmail: new FormControl('',[
    Validators.required,
    Validators.email,
   ]),
   userPassword: new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15),
   ])
  


  });
  onsubmit() {
    if (this.loginForm.valid) {
      const userCredentials = {
        email: this.EmailID.value,
        password: this.Password.value
      };

      this.auth.login(userCredentials).subscribe(
        (loggedIn: boolean) => {
          if (loggedIn) {
            if (this.auth.isAdmin()) {
              // Redirect to Admin dashboard if user is an admin
              this.route.navigate(['/admindashboard']);
            } else {
              // Redirect to User dashboard if user is not an admin
              this.route.navigate(['/dashboard']);
            }
          } else {
            this.toastr.error('Invalid credentials', 'Login Failed');
          }
        },
        (error) => {
          this.toastr.error('An error occurred', 'Login Failed');
        }
      );
    }
  }




get EmailID(): FormControl {
  return this.loginForm.get('userEmail')as FormControl;
}

get Password(): FormControl{
  return  this.loginForm.get('userPassword') as FormControl;
}


}

 