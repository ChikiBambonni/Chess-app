import { Component, OnInit } from '@angular/core';

import { ChatService } from '@core/services/chat/chat.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {

  messages = [
    {
      from: {
        id: '123qwe',
        username: 'User2',
        room: '',
        password: 'avatar2'
      },
      content: 'message 2 content',
      timestamp: 123456
    }, {
      from: {
        id: '123asd',
        username: 'User1',
        room: '',
        password: 'avatar1'
      },
      timestamp: 123456
    }, {
      from: {
        id: '123zxc',
        username: 'User3',
        room: '',
        password: 'avatar3'
      },
      content: 'message 3 content',
      timestamp: 123456
    }
  ];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    });

    setTimeout(() => {
      console.log('called send message');
      this.sendMessage();
    }, 3000);
  }

  sendMessage() {
    this.chat.sendMessage('Test Message');
  }
}
