import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup= new FormGroup({});
  constructor(private formb : FormBuilder,private userService:UserService,
    private _snackBar : MatSnackBar,private router:Router,
    private location: Location) { }

  ngOnInit(): void {
    this.addUserForm = this.formb.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
    })

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }
    createUser(){
       this.userService.addUser(this.addUserForm.value).subscribe(data =>{
         this._snackBar.open("user created successfully ");
         this.router.navigate(['/users/create']).then(() => {
           window.location.reload();
         });

       }, err => {
        this._snackBar.open("unable to create user ");
       })
    }

    onChangeUrl(){
      this.router.navigateByUrl('/users/list');
    }
}
