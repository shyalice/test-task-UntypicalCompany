import * as actions from "./actionTypes";

export function addUser(user) {
    return {
        type: actions.ADD_USER,
        user
    }
}

export function deleteUser(deleted) {
    return {
        type: actions.DELETE_USER,
        deleted
    }
}

export function updateUser(userId, user) {
    return {
        type: actions.UPDATE_USER,
        userId,
        user
    }
}