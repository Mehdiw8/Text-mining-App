import React from 'react';
import {Grid} from "@material-ui/core"
import PanelContent from './PanelContent'
import Sidebar from './Sidebar'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({

     

}));
const Panel = () => {
        const classes = useStyles()
        return (
                <section className={classes.panelWrapper}>
                <Grid container className={classes.panel} >
                        <Grid item xs={3} sm={4}>
                                <Sidebar/>
                        </Grid>
                        <Grid item xs={9} sm={8}>
                                <PanelContent/>
                        </Grid>
                        
                </Grid>
                </section>
        );
};

export default Panel;