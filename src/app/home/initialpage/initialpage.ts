import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomText } from '../../components/text/text';
import { CustomButton } from '../../components/button/button';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-initialpage',
  standalone: true,
  imports: [CustomText, CustomButton, MatButtonModule],
  templateUrl: './initialpage.html',
})
export class Initialpage {
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login'])
  }
  goToSignup() {
    this.router.navigate(['signup'])
  }
}