import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, take } from 'rxjs';
import { AuthUser } from 'src/app/shared/entities/auth-user';
import { Errors } from 'src/app/shared/entities/error-entity';
import { AuthService } from 'src/app/shared/services/auth-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  authUser!: AuthUser;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      username: [null],
      password: [null]
    })
  }
  ngOnInit(): void {
    
  }


  async loginAsync(): Promise<void>{
    console.log("entrei")
    debugger;
    try {
      if(this.isFormValid()){
        const data = this.form.value as AuthUser;
        const  { token } = await lastValueFrom (this.authService.loginUser(data).pipe(take(1)));
        this.authService.setToken(token);
        this.router.navigate(['/dashboard']);
      }
    }
    catch({error}){
      console.log(error as Errors);
    }
  }

  isFormValid(): boolean{
    const isValid = this.form.valid;
    if(!isValid)
    {
      this.form.markAllAsTouched();
    }
    
    console.log(isValid)
    return isValid;
  }


}
