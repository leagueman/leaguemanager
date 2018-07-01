import React, {Fragment} from 'react';
import TableCell from '@material-ui/core/TableCell'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

const User = ({user}) => {
 
    return (
        <Fragment>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                <IconButton color="default">
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton color="default">
                    <Icon>delete</Icon>
                </IconButton>
            </TableCell>
        </Fragment>
    );
};

export default User;

