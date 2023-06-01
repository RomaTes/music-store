import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-pr-sign-in',
  templateUrl: './pr-sign-in.component.html',
  styleUrls: ['./pr-sign-in.component.scss']
})
export class PrSignInComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  user: any;
  userPhoto: any;

  ngOnInit(): void {
  }

  signInWithGoogle() {
    // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then((result) => {
    //     // Успішний вхід в систему через Google
    //   })
    //   .catch((error) => {
    //     // Обробка помилки
    //   });

      const provider = new GoogleAuthProvider();
      this.afAuth.signInWithPopup(provider)
        .then((result) => {
          // Successful Google sign-in
          console.log(result.user?.photoURL);
          this.userPhoto = result.user?.photoURL;
          this.user = result.user;
        })
        .catch((error) => {
          // Handle error
        });
  }

}
