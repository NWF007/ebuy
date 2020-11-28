import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick() {
    const URL = "https://ebuy.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=1e0b8n5d2najhro3fmo4oi9qm5&redirect_uri=http://localhost:4200";
    window.location.assign(URL);
  }

}
