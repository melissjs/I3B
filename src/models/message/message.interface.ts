import { Profile } from '../profile/profile.interface';

export interface Message {
    userFromId: string;
    userToId: string;
    userFromProfile: {
        firstName: string;
        lastName: string;
    }
    userToProfile: {
        firstName: string;
        lastName: string;
    }
    content: string;

}