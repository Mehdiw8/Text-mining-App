import React from 'react';
import {Grid} from "@material-ui/core"
import PanelContent from './PanelContent'
import Sidebar from './Sidebar'
const Panel = () => {
      
        return (
                
                <Grid container>
                        <Grid item xs={3} sm={4}>
                                <Sidebar/>
                        </Grid>
                        <Grid item xs={9} sm={8}>
                                <PanelContent/>
                        </Grid>
                        
                </Grid>
        );
};

export default Panel;