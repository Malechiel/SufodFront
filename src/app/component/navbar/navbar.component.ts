import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/model/compte';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  get logged() {
    return sessionStorage.getItem('token');
  }

  get admin() {
    if (sessionStorage.getItem('compte.type') == 'admin') {
      console.log('admin connected');
      return true;
    }
    return false;
  }

  get compte(): Compte | null {
    if (sessionStorage.getItem('compte')) {
      return JSON.parse(sessionStorage.getItem('compte')!) as Compte;
    }
    return null;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
  ngOnInit(): void {}
}
