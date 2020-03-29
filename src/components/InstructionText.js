import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

  //add variable with result to replace var
export default function InstructionText() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Typography variant='h4' color='#302e2e'>
                Should I social distance myself? 
            </Typography>
            <Typography variant='h2' color='#302e2e' align='center'>
                Var
            </Typography>
        </div>
    )
  
}