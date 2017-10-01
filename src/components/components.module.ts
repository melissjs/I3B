import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';

@NgModule({
    declarations: [LoginFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent],
    imports: [IonicModule],
    exports: [LoginFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent]

})

export class ComponentsModule {

}