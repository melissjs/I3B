import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';

@NgModule({
    declarations: [LoginFormComponent,
    EditProfileFormComponent],
    imports: [IonicModule],
    exports: [LoginFormComponent,
    EditProfileFormComponent]

})

export class ComponentsModule {

}