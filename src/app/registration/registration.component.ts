import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  regForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      this.oneUpper,
      this.oneLower,
      this.oneNumber,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(2),
      Validators.minLength(8),
      Validators.maxLength(15)
    ]),
    usernumber: new FormControl('', [
      Validators.required,
      this.noNonNumbers,
      this.thirtySixDigits
    ]),
    location: new FormControl('', [
      Validators.required
    ]),
  })
  constructor() {}

  ngOnInit() {}

  oneUpper(controlup:FormControl) {
    let hasUpper = /[A-Z]/.test(controlup.value)
    if (!hasUpper) return {oneUpper: true}
    return null
  }

  oneLower(controllow:FormControl) {
    let hasLower = /[a-z]/.test(controllow.value)
    if (!hasLower) return {oneLower: true}
    return null
  }

  oneNumber(controlnumber:FormControl) {
    let hasNumber = /\d/.test(controlnumber.value)
    if (!hasNumber) return {oneNumber: true}
    return null
  }

  thirtySixDigits(digits:FormControl) {
    if (digits.value.length !== 36) return {thirtySixDigits: true}
    return null
  }
  
  noNonNumbers(onlynumbers:FormControl) {
    let onlyNumber = /^[0-9]+$/.test(onlynumbers.value)
    if (!onlyNumber) return {noNonNumbers: true}
    return null
  }

  onSubmit() {

  }

}
