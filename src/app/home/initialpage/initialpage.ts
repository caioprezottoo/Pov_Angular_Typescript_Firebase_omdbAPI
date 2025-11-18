import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Text } from '../../components/text/text';
import { Button } from '../../components/button/button';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-initialpage',
  standalone: true,
  imports: [Text, Button, MatButtonModule],
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