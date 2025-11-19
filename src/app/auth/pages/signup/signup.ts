import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomText } from "../../../components/text/text";
import { CustomButton } from '../../../components/button/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CustomText, CustomButton, FormsModule],
  templateUrl: './signup.html',
})
export class Signup {

  name = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async signup() {
    try {
      const user = await this.authService.signup(this.name, this.email, this.password);

      console.log("User created:", user);

      this.router.navigate(['movies/explore']);
    } catch (error: any) {
      console.error("Signup error:", error);
      alert(error.message);
    }
  }

  goToInitialPage() {
    this.router.navigate(['']);
  }
}
