import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  
 password = null;
 identification_number = null;
  ngOnInit()
  {
    
  }
  constructor(public userService: UserService,
    private router : Router) {}

  login() {
    const user = {identification_number: this.identification_number, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
      localStorage.setItem('auth_token', data.access_token);
      localStorage.setItem('token_type',data.token_type);
      this.router.navigateByUrl('user/index');
    });
  }
  
}
