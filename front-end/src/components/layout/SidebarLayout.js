import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import JSStyle from '../../assets/jss/JSStyle'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'


const Sidebar = ({classes, routes})=>{
    const menuItems = routes
        .sort((a,b)=>{
            if(a.order<b.order) return -1
            else return 1
        })
        .map((route, key)=>(
        <MenuItem className={classes.menuItem} key={key} component={Link} to={route.path} from={window.location.pathname}>
            <ListItemIcon className={classes.icon}>
                <SendIcon/>
                {/* <img src={'/images/icons/'+route.icon+'.svg'} /> */}
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary={route.link} />
        </MenuItem>
    ))
    return(
        <Drawer 
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                <MenuList>
                    {menuItems}
                </MenuList>
            </List>
            <Divider />
        </Drawer>
    )
};
    


export default withStyles(JSStyle)(Sidebar);