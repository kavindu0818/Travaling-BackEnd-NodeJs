import Chat from "../model/Chat";


const chat: Chat [] = [];

export function saveChat(newChat: Chat) {
    chat.push(newChat);

    console.log(newChat.userId);
    console.log(newChat. quaryText);
}

export function getAllChats() {
    return chat;
}

export function getChat(id: string) {
    const getChat = chat.find(chats =>chats.quaryId === id);

    if (getChat) {
        console.log(`Chat with ID ${id} found.`);
        return getChat;
    } else {
        console.log(`Chat with ID ${id} not found.`);
        return null;
    }
}

export function updateChat(newChat: Chat) {
    const index = chat.findIndex(chats => chats.quaryId === newChat.quaryId);
    if (index !== -1) {
        chat[index] = newChat;
        console.log(`Chat with ID ${newChat.quaryId} updated successfully.`);
    } else {
        console.log(`Chat with ID ${newChat.quaryId} not found.`);
    }
}