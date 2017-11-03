import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/message/message.interface';
import { MESSAGE_LIST } from '../../mocks/messages/messages.mocks';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';
import { ChatService } from '../../providers/chat/chat.service';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile; 
  messageList: Message[]
  userId: string;
  userProfile: Profile;

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private data: DataService, private chat: ChatService) {
    this.messageList=MESSAGE_LIST;
  }

  ionViewWillLoad() {
    this.selectedProfile  = this.navParams.get('profile');
    this.auth.getAuthenticatedUser().subscribe(auth => this.userId = auth.uid);
    this.data.getAuthenticatedUserProfile().subscribe(profile => this.userProfile = profile)
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userProfile.$key,
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        content: content
      }
      await this.chat.sendChat(message);
      console.log(message);

    }
    catch (e) {
      console.error(e);
    }
  }

}
