import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ChatMessageComponent } from './chat-message/chat-message';
import { OnlineUsersComponent } from './online-users/online-users';
import { LastMessageListComponent } from './last-message-list/last-message-list';

@NgModule({
    declarations: [LoginFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMessageListComponent],
    imports: [IonicModule],
    exports: [LoginFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent,
    LastMessageListComponent]

})

export class ComponentsModule {

}