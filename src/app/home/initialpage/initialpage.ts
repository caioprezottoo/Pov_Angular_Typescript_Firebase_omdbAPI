import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initialpage',
  imports: [],
  templateUrl: './initialpage.html',
  styleUrl: './initialpage.css',
})
export class Initialpage {
  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['login'])
  }
  goToSignup(){
    this.router.navigate(['signup'])
  }
}
