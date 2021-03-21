import React from "react";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../Redux/actions";
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
}));

const UsersListTableToolBar = (props) => {
    const {selected, handleDeleteButton} = props;
    const classes = useToolbarStyles();
    const dispatch = useDispatch();

    const onDelete = () =>{
        dispatch(deleteUser(selected));
        handleDeleteButton();
    }

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: selected.length > 0,
            })}
        >
            {selected.length > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">{selected.length} selected</Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">Users</Typography>
            )}

            {selected.length > 0 ? (
                <Tooltip title="Delete" onClick={() => onDelete()}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

export default UsersListTableToolBar;