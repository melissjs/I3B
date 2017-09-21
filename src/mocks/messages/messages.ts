import { Message } from '../../models/message/message';
import { User } from '../../models/user/user';

const userList: User[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar.png'
    },
    {
        firstName: 'Lina',
        lastName: 'Halliday',
        email: 'email@email.com',
        avatar: 'assets/img/avatar.png'
    },
    {
        firstName: 'Regina',
        lastName: 'Day',
        email: 'email@email.com',
        avatar: 'assets/img/avatar.png'
    },
    {
        firstName: 'Holly',
        lastName: 'Rual',
        email: 'email@email.com',
        avatar: 'assets/img/avatar.png'
    }
];

const messageList: Message[] = [
    {
        user: userList[0],
        date: new Date()
    },
    {
        user: userList[1],
        date: new Date()
    },
    {
        user: userList[2],
        date: new Date()
    },
    {
        user: userList[3],
        date: new Date()
    },
]

export const MESSAGE_LIST = userList; 