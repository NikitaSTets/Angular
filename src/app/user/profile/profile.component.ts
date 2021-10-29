import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    var currentUserFirstName = this.authService.currentUser.firstName;
    var currentUserLastName = this.authService.currentUser.lastName;

    let firstName = new FormControl(currentUserFirstName);
    let lastName = new FormControl(currentUserLastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);

    this.router.navigate(['events'])
  }
  
  cancel() {
    this.router.navigate(['events'])
  }
}