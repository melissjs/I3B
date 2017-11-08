import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatService } from '../../providers/chat/chat.service';
import { Message } from '../../models/message/message.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'last-message-list',
  templateUrl: 'last-message-list.html'
})

export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Message[]>;

  constructor(private chat: ChatService, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.messageList$ = this.chat.getLastMessagesForUser();   
  }

  navigateToMessage(message: Message) {
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }
    this.navCtrl.push('MessagePage', { profile: selectedProfile })
  }

}
