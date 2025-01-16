import User from "../model/User";

const users: User[] = [];

export function addUser(newUser: User) {
    users.push(newUser);

    console.log(newUser.id);
    console.log(newUser.name);
    console.log(newUser.password);
}

export function getUsers() {
    return users;
}

export function updateUser(updatedUser: User) {
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        console.log(`User with ID ${updatedUser.id} updated successfully.`);
    } else {
        console.log(`User with ID ${updatedUser.id} not found.`);
    }
}


export function deleteUser(id: string) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`User with ID ${id} deleted successfully.`);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}


export function getUniqUser(id: string) {
    const user = users.find(user => user.id === id);
    if (user) {
        console.log(`User with ID ${id} found.`);
        return user;
    } else {
        console.log(`User with ID ${id} not found.`);
        return null;
    }

}

