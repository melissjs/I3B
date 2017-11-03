import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channel/channel.interface';
import { ChatService } from '../../providers/chat/chat.service';
import { ChannelMessage } from '../../models/channel-message/channel-message.interface';
import { FirebaseListObservable } from 'angularFire2/database';

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor(private chat: ChatService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chat.getChannelChatReference(this.channel.$key);
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {
      content: content
    }
    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
  }


}
