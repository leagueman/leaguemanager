import React from 'react';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import User from './User'

const Users = (props) => {
     let userList = props.users.map((user, key)=>(
        <TableRow key={key}>
            <User user={user} />
        </TableRow>
    ))

    // TO-DO POSSIBLY SOME PAGINATION HERE
    return (
       
        <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {userList}
            </TableBody>
            <TableFooter>
            <TableRow>
                <TableCell colSpan={6}>{'footer'}</TableCell>
            </TableRow>
            </TableFooter>
        </Table>
        </Paper>
    );
};

export default Users;