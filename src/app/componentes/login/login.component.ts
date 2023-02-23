import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {authUser} from './../../models/User';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: authUser = {
    email: '',
    password: ''
  }
  constructor (private router: Router, private route: ActivatedRoute, private authService: AuthService){}

  ngOnInit(): void {
      
  }
  login(loginUser: authUser) {
    this.authService.login(loginUser.email, loginUser.password)
  }

}
