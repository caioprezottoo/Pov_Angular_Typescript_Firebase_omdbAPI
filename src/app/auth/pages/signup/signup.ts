import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomText } from "../../../components/text/text";
import { CustomButton } from '../../../components/button/button';

@Component({
  selector: 'app-signup',
  imports: [CustomText, CustomButton],
  templateUrl: './signup.html',
})
export class Signup {
  constructor(private router: Router) { }

  goToMovies() {
    this.router.navigate(['movies/explore'])
  }

  goToInitialPage() {
    this.router.navigate([''])
  }
}
