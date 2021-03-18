import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import UserItem from "./UserItem";
import Box from '@material-ui/core/Box';

const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    return(
        <ul>
            {users.map(user => <li>{user}</li>)}
        </ul>
    )
    
};

export default UsersList;