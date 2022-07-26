import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User} from '../user';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = null;
  name = {};
  last_name = {};
  identification_number = {};
  birth_date = {};
  password = {};
  idUser = {};
  
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,

    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idUser'];
    this.userService.find(this.id).subscribe((data: User)=>{
      this.name = data.name;
      this.last_name = data.last_name;
      this.identification_number = data.identification_number;
      this.password = data.password;
      this.birth_date = data.birth_date;
      this.idUser = data.id;
    });
  }

  update(){
    const user = {
      name: this.name, 
      last_name: this.last_name,
      identification_number : this.identification_number,
      birth_date : this.birth_date,
      password : this.password,
      identification_type : 1
  };

  console.log(user);
    this.userService.update(this.idUser,user).subscribe( data => {
      this.router.navigateByUrl('user/index');
    });
}

}


