import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // NOTE: Children routes are accessed by 'parent route/children route'
    this.router.navigate(['main/estatistica']);
  }

}
