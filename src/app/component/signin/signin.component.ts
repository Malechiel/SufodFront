import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/model/compte';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  pseudo = '';
  password = '';
  showError = false;
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit(form: any) {
    this.authService.auth(this.pseudo, this.password).subscribe({
      next: (compte: Compte) => {
        this.showError = false;
        sessionStorage.setItem(
          'token',
          btoa(`${this.pseudo}:${this.password}`)
        );
        sessionStorage.setItem('compte', JSON.stringify(compte));
        this.router.navigateByUrl('/home');
      },
      error: (error: any) => {
        console.log(error);
        this.message = "erreur d'autentification";
        this.showError = true;
      },
    });
  }
}
