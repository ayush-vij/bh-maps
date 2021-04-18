import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  constructor(private router: Router) { }

  goto_questions(){
    this.router.navigate(['../home']);
  }

  

}
