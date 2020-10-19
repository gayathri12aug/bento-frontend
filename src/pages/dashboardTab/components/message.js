/* eslint-disable */
import React from 'react';
import { withStyles } from '@material-ui/core';

const message = ({ classes, data }) => {
  
  return (
       <div className={classes.message} >    
                <div className={classes.messageTextArea}>{data}</div>
                <div className={classes.arrayIcon}>
                <div className={classes.arrayIconCover}></div>
                <div className={classes.arrayIconBase}></div>
                </div>
      </div>
  );
};

const styles = (theme) => ({
  arrayIconBase: {
    width: '0px',
    height: '0px',
    borderTop: '15px solid #03A383',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '20px solid transparent',
  },
  arrayIconCover: {
    position: 'absolute',
    marginTop: '-2px',
    marginLeft: '0.3px',
    width: '0px',
    height: '0px',
    borderTop: '15px solid #fff',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '20px solid transparent',
  },
  messageTextArea: {
    width: '250px',
    minHeight: '100px',
    border: '2px solid #03A383',
    borderRadius: '10px',
    background: '#fff',
    padding: '5px 5px 5px 10px',
    textAlign: 'left',
  },
  arrayIcon:{
    marginLeft: '205px'
  },
});
export default withStyles(styles, { withTheme: true })(message);