import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { AuthService } from '../login/auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  private firstName!: FormControl
  private lastName!: FormControl

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  
  }

  ngOnInit(): void {
    var currentUserFirstName = this.authService.currentUser.firstName;
    var currentUserLastName = this.authService.currentUser.lastName;

    this.firstName = new FormControl(currentUserFirstName, [Validators.required, Validators.pattern("^[a-zA-Z].*$")]);
    this.lastName = new FormControl(currentUserLastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }

  validateFirstName() {
    return this.firstName.valid
  }

  validateLastName() {
    return this.lastName.valid
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);

      this.toastr.success('Profile save')
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }
}