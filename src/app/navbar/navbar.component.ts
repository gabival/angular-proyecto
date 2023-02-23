import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showNav = true;
  otherScroll = window.pageYOffset;

  x = fromEvent(document, 'scroll');

  constructor( private router: Router){
    this.x.subscribe((res:any)=> {
      console.log(res);
      const scroll = res.target.documentElement.scrollTop;
      console.log(scroll);

      if(scroll > 100){
        this.showNav = false;
      }
      if(scroll < this.otherScroll){
        this.showNav = true;
      }
      this.otherScroll = scroll;
    });
  }

}
