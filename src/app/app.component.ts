import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn$: Observable<boolean>
  loggedOut$: Observable<boolean>

  constructor(
    private modal: NgbModal,
    private auth: AngularFireAuth,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loggedIn$ = this.auth.authState.pipe(
      map(user => !!user)
    )

    this.loggedOut$ = this.loggedIn$.pipe(
      map(loggedIn => !loggedIn)
    )
  }

  signIn() {
    this.modal.open(SignInComponent)
  }

  async signOut() {
    await this.auth.signOut()
    await this.router.navigateByUrl("/")
  }

}
