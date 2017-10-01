import { Component } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';


@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[];

  constructor(private data: DataService) {
  }

  searchUser(query: string) {
    this.data.searchUser(query).subscribe(profiles => {
      this.profileList = profiles;
      console.log(profiles);
    })
  }

}
