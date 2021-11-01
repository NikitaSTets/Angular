import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  private firstName!: FormControl
  private lastName!: FormControl

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    var currentUserFirstName = this.authService.currentUser.firstName;
    var currentUserLastName = this.authService.currentUser.lastName;

    this.firstName = new FormControl(currentUserFirstName, [Validators.required, Validators.pattern("[a-zA-Z]")]);
    this.lastName = new FormControl(currentUserLastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }

  validateFirstName() {
    return this.firstName.valid && this.firstName.touched
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.touched
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);

      this.router.navigate(['events'])
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }
}