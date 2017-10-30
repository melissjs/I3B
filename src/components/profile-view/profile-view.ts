import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading, Content } from 'ionic-angular';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  ngOnInit(): void {
    this.loader.present();
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
    })    

    this.existingProfile.emit(this.userProfile);
    this.loader.dismiss();
    
    // this.loader.present();
    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   this.authUser = auth;
    //   this.data.getProfile(this.authUser).subscribe(profile => {
    //     this.userProfile = <Profile>profile.val();
    //     this.existingProfile.emit(this.userProfile);
    //     this.loader.dismiss();
    //     console.log('hi');
    //     console.log(this.userProfile);
    //   })
    // })
  }

  constructor(private loading: LoadingController, private data: DataService, private auth: AuthService) {

    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

}
