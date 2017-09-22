import { User } from '../../models/user/user.interface';

const userList: User[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar1.png'
    },
    {
        firstName: 'Lina',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar2.png'
    },
    {
        firstName: 'Regina',
        lastName: 'Day',
        email: 'email@email.com',
        avatar: 'assets/img/avatar3.png'
    },
    {
        firstName: 'Holly',
        lastName: 'Rual',
        email: 'email@email.com',
        avatar: 'assets/img/avatar4.png'
    }
];


export const USER_LIST = userList; 