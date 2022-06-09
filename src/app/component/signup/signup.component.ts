import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router
  ) {
    this.form = new FormGroup({
      prenom: new FormControl('', Validators.minLength(2)),
      nom: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required, this.checkLogin()),
      type: new FormControl('joueur'),
      passwordGroup: new FormGroup(
        {
          password: new FormControl('', Validators.required),
          confirm: new FormControl(),
        },
        this.passwordAndConfirmEquals
      ),
    });
  }

  checkLogin(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.inscriptionService.checkLogin(control.value).pipe(
        map((bool) => {
          return bool ? { loginExist: true } : null;
        })
      );
    };
  }

  passwordAndConfirmEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('password')?.errors) {
      return null;
    }
    return group.get('password')?.value == group.get('confirm')?.value
      ? null
      : { passwordAndConfirmNotEquals: true };
  }

  ngOnInit(): void {}

  submit() {
    let compte = {
      prenom: this.form.get('prenom')?.value,
      nom: this.form.get('nom')?.value,
      mail: this.form.get('mail')?.value,
      pseudo: this.form.get('login')?.value,
      type: this.form.get('type')?.value,
      mdp: this.form.get('passwordGroup.password')?.value,
    };
    this.inscriptionService.inscription(compte).subscribe((data) => {
      this.router.navigate(['/home'], { queryParams: { inscription: true } });
    });
    console.log(compte);
  }
}
