import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar1.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Lina',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar2.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Regina',
        lastName: 'Day',
        email: 'email@email.com',
        avatar: 'assets/img/avatar3.png',
        dateOfBirth: new Date()
        
    },
    {
        firstName: 'Holly',
        lastName: 'Rual',
        email: 'email@email.com',
        avatar: 'assets/img/avatar4.png',
        dateOfBirth: new Date()
    }
];


export const USER_LIST = userList; 