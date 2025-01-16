import Chat from "../model/Chat";


export const chat: Chat [] = [];

export function saveChat(newChat: Chat) {
    chat.push(newChat);

    // console.log(chat.userId);
    // console.log(newChat. quaryText);
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

export function delete_Chat(id: string) {
    const index = chat.findIndex(chat => chat.quaryId === id);
    if (index !== -1) {
        chat.splice(index, 1);
        console.log(`Chat with ID ${id} deleted successfully.`);
    } else {
        console.log(`Chat with ID ${id} not found.`);
    }
}