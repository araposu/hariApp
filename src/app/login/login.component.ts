import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  title = 'Super A2 Chat';
  user: User = {
    name: "",
    pass: '0000'
  };
  gotoChat() {
    this.router.navigate(['/chat']);
  }
}

export class User {
  name: string;
  pass: string;
}
