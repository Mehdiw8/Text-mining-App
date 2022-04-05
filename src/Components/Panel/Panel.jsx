import React,{useState,useEffect} from 'react';
import {Grid} from "@material-ui/core"
import PanelContent from './PanelContent'
import Sidebar from './Sidebar'
import { makeStyles } from '@material-ui/core/styles';
import { HiOutlineMenu ,HiOutlineX} from "react-icons/hi";
import styles from '../CSSFile/Header.module.css';
import useTitle from '../../Customhooks/useTitle';
const useStyles = makeStyles((theme)=>({

        // hide:{
        //         marginRight: "-33%",
        //         transition: "1s ease-in-out  ", 
        // },
        // show:{
               
        // },
        // panelContentWrapper:{
        //         display: 'flex',
        //         justifyContent: 'center',
               
        // }

}));
const Panel = () => {
       
       const userLSd = JSON.parse(localStorage.getItem('userDetail'))
        console.log(userLSd)
        useTitle('داشبورد')
        const classes = useStyles()
        const[humber,setHumber]=useState(false)
        return (
                <section className={classes.panelWrapper}>
                <Grid container className={classes.panel} >
                        <Grid className={humber? classes.hide : classes.show} item xs={3} sm={4}>
                                <Sidebar userLSd={userLSd} />
                        </Grid>
                        <Grid item xs={humber? 12 : 9} sm={ humber ? 12 :8}>
                       <section className={classes.panelContentWrapper}>
                                {/* <div className={styles.humbergerMenu}>
                                                        <div className={humber ? styles.humbergerMenuT :styles.humbergerMenuF} onClick={()=>{
                                                                setHumber((prevHumber) => !prevHumber)
                                                                
                                                        }}>
                                                        <HiOutlineMenu />
                                                                <HiOutlineX />
                                                        </div>
                                                        </div> */}
                                        <PanelContent userLSd={userLSd} />
                       </section>
                        </Grid>
                        
                </Grid>
                </section>
        );
};

export default Panel;