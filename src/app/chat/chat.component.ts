import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.min.css']
})
export class ChatComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  messages: Message[] = [
    {sender:"hari", text:"booooooh"},
    {sender:"taro", text:"byaaaaaa"},
    {sender:"alex", text:"hello world!"}
  ]
}

export class Message {
  sender: string;
  text: string;
}
