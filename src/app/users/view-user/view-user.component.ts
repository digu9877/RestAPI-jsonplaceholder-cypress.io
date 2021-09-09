import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userID : string ='';
  userDetails : any;
  constructor(private userservice: UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params      .       subscribe(data => {
      this.userID = data.id;
      console.log(this.userID)
    })

    this.userservice.viewUser(this.userID).subscribe(data =>{
      this.userDetails =data;
      })
  }

}
