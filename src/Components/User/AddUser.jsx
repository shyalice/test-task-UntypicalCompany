import React from 'react';
import {useState} from "react"
import {useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles';
import {addUser} from "../../Redux/actions";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import UserModalField from "./UserModalField";

const useStyles = makeStyles((theme) => ({
    groupTitle: {
        display: "flex",
        alignItems: "center"
    }
}));

const AddUser = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUser({
            name: "",
            lastName: "",
            birthday: "",
            gender: null,
            phone: "",
            email: ""
        })
    };

    //user
    const [newUser, setUser] = useState({
        name: "",
        lastName: "",
        birthday: "",
        gender: null,
        phone: "",
        email: ""
    });

    const dispatch = useDispatch();

    const onAdd = () =>{
        dispatch(addUser(newUser));
        handleClose();
    }

    const handleChange = (name, value) => {
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
    <div>
        <div className={classes.groupTitle}>
            <Typography variant="h6">Add New User</Typography>
            <IconButton color="primary" component="span" style={{ marginLeft: "5px" }} onClick={handleOpen}>
                <AddCircleOutlineIcon style={{ fontSize: 30 }} />
            </IconButton>
            <UserModalField
                title="Add new user"
                isOpen={isOpen}
                handleClose={handleClose}
                handleChange={handleChange}
                onClick={onAdd}
                user={newUser}
            />
        </div>
    </div>
    );
}

export default AddUser;