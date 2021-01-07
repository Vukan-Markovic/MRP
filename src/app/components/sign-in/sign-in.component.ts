import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    public modal: NgbActiveModal,
    private auth: AngularFireAuth
  ) { }

  async signIn() {
    try {
      const { email, password } = this.form.value
      await this.auth.signInWithEmailAndPassword(email, password)
      this.modal.close()
    } catch (err) {
      console.log(err)
    }
  }

  ngOnInit(): void {
  }

  dismiss() {
    this.modal.dismiss()
  }
}
