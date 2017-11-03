import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Channel } from '../../models/channel/channel.interface';
import { ChannelMessage } from '../../models/channel-message/channel-message.interface';
import { Message } from '../../models/message/message.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';

@Injectable()
export class ChatService {

  constructor(private auth: AuthService, public database: AngularFireDatabase) {
  }

  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({ name: channelName })
  }

  getChannelListReference(): FirebaseListObservable<Channel[]> {
    return this.database.list(`channel-names`);
  }

  getChannelChatReference(channelKey: string) {
    return this.database.list(`channels/${channelKey}`)
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.database.list(`/channels/${channelKey}`).push(message);
  }

  async sendChat(message: Message) {
    await this.database.list('/messages').push(message);
  }

  getChats(userTwoId: string) {
    return this.auth.getAuthenticatedUser()
    .map(auth => auth.uid)
    .mergeMap(uid => this.database.list(`user-messages/${uid}/${userTwoId}`))
    .mergeMap(chats => {
      return Observable.forkJoin(
        chats.map(chat => this.database.object(`/messages/${chat.$key}`)
        .first()),
        (...vals: Message[]) => {
          console.log(vals);
          return vals;
        }
      )
    })
  }

}
