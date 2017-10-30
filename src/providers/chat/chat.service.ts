import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Channel } from '../../models/channel/channel.interface';

@Injectable()
export class ChatService {

  constructor(public database: AngularFireDatabase) {
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

}
