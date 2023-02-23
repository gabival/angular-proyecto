import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { authUser } from 'src/app/models/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
 
  roles: any;
  selectedRol: any;

  registerUser: authUser = {
    email: '',
    password: ''
  }
  constructor (private router: Router, private route: ActivatedRoute, private authService: AuthService){

  //  this.roles = [
      //{name: 'Administrador', code: 'A1'},
      //{name: 'Encargado', code: 'E1'}
 
  //];
  }
  ngOnInit(): void {
      
  }

  register(registerUser: authUser){
    this.authService.register(registerUser.email, registerUser.password)
  }
}
