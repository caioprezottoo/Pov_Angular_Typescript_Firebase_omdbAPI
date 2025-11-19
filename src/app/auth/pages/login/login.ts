import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { CustomText } from '../../../components/text/text';
import { CustomButton } from '../../../components/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CustomText, CustomButton],
  templateUrl: './login.html',
})
export class Login {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async login() {
    try {
      if (!this.email || !this.password) {
        alert("Email and Password are required");
        return;
      }

      await this.authService.login(this.email, this.password);

      this.router.navigate(['movies/explore']);
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.message);
    }
  }

  goToInitialPage() {
    this.router.navigate(['']);
  }
}
