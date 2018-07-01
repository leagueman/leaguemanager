const drawerWidth = 240;

const styles = theme =>{ 
  
// console.log(theme.palette)
return ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  textField: {
    margin: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // marginBottom: theme.spacing.unit,
  },
  cardHeader: {    
    backgroundColor: theme.palette.primary.main,
    textColor: theme.palette.primary.contrastText,
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // marginTop:-40,
  },
  signin:{
    marginLeft: 'auto',
  },
  toolbar: theme.mixins.toolbar,
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  snackbarText: {
    display: 'flex',
    alignItems: 'center',
  },
})};
export default styles;
