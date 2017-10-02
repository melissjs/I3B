import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Input() profile: Profile;
  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private data: DataService, private auth: AuthService) {

    this.saveProfileResult =  new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile;
    }
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
