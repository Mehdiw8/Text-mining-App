import React from 'react';
import {useStyles} from '../Panel.Style/Page.style'
import { Typography} from '@material-ui/core'
const HeadContent = ({headText,dis}) => {
        const classes = useStyles()
        return (
                <>
                        <div className={classes.headContent}>
                                       <Typography variant="h5" className={`${classes.ttext} ${classes.texxt}`}>
                                               {headText}
                                               </Typography>         
                                               <Typography  variant="body1" color="initial" className={classes.ttext}>
                                                       {dis}
                                        </Typography>
                                 </div>
                </>
        );
};

export default HeadContent;