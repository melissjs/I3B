import { Message } from '../../models/message/message.interface';
import { USER_LIST } from '../profiles/profiles.mocks';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach((user) => {
    messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
})

// const messageList: Message[] = [
//     {
//         user: userList[0],
//         date: new Date()
//     },
//     {
//         user: userList[1],
//         date: new Date()
//     },
//     {
//         user: userList[2],
//         date: new Date()
//     },
//     {
//         user: userList[3],
//         date: new Date()
//     },
// ]

export const MESSAGE_LIST = messageList; 