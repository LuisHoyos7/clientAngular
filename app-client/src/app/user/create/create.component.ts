import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name = null;
  last_name = null;
  identification_number = null;
  birth_date = null;
  password = null;

  constructor(
    public userService: UserService,
    private router: Router
    // public form: FormGroup
  ) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    //   email: new FormControl('', [ Validators.required, Validators.email ]),
    //   phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    // });

  }

  // get f(){
  //   return this.form.controls;
  // }

  store(){

    const user = {
        name: this.name, 
        last_name: this.last_name,
        identification_number : this.identification_number,
        birth_date : this.birth_date,
        password : this.password,
        identification_type : 1
    };

    console.log(user);
      this.userService.store(user).subscribe( data => {
        this.router.navigateByUrl('user/index');
      });
  }

}

