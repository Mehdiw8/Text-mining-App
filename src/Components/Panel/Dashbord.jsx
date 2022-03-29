import React from 'react';
import {Typography,Grid} from "@material-ui/core"
import {Visibility,ArrowUpward,Person,EmojiEvents,Timeline} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import CardState from './Panel Help C/CardState';
import TableD from './Panel Help C/TableD';
import UserCard from './Panel Help C/UserCard'
const useStyles = makeStyles((theme)=>({
        headDashbord:{
                background:"linear-gradient(87deg,#11cdef,#1171ef)",
                borderRadius:"0 8px 8px 0",
                padding:"25px 20px 200px 2px",
                position:'relative',

        },
        CardWrapper:{
                display:"flex",
                flexWrap: "wrap",
        },
        headCard:{
                color:'#fff',
                fontWeight:'bold',
                fontSize:'26px',
                margin:'0 12px 24px 0'
        },
        tableAndUser:{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position:"absolute",
                bottom:"-274px",
                width:"98%",
                left:"3px"
        },
        tableW:{
                width:'68%',
                [theme.breakpoints.down('xs')]:{
                        width:"100%",
                }
        },
        user:{
                width:"28%",
                [theme.breakpoints.down('xs')]:{
                        display: 'none'
                }
        },
        wrapper:{

        },
        headtableAndUser:{
                color:'#fff',
                fontWeight:'bold',
                fontSize:'22px',
                margin:'0 0 24px 0'
        }
   
}));
const Dashbord = () => {
        const classes = useStyles()
        return (<>
        <section className={classes.wrapper}>
                <section className={classes.headDashbord} >
                      <Typography className={classes.headCard} variant="h5" >آمار کلی</Typography>
                          <div className={classes.CardWrapper}>
                                <Grid item lg={3} sm={6} xs={12}>
                                <CardState
                                h6= "تعداد بازدید ها"
                                p1="350,897"
                                p2="طی یک ماه گذشته 3.48%"
                                icon={ <Visibility  />}
                                  iconH={<ArrowUpward style={{color:"green"}} />}
                                  color="green"
                                />
                                </Grid>
                                <Grid item lg={3} sm={6} xs={12}>
                                <CardState
                                h6= "تعداد ممبر های جدید"
                                p1="256"
                                p2="طی یک ماه گذشته 3.48%"
                                icon={ <Person  />}
                                  iconH={<ArrowUpward style={{color:"green"}} />}
                                  color="yello"
                                />
                                </Grid>
                                <Grid item lg={3} sm={6} xs={12}>
                                <CardState
                                h6= "ترافیک"
                                p1="3,897"
                                p2="طی یک ماه گذشته 3.48%"
                                icon={ <Timeline  />}
                                  iconH={<ArrowUpward style={{color:"green"}} />}
                                  color="orange"
                                />
                                </Grid>
                                <Grid item lg={3} sm={6} xs={12}>
                                <CardState
                                h6= "بازدهی"
                                p1="49,65%"
                                p2="طی یک ماه گذشته 3.48%"
                                icon={ <EmojiEvents  />}
                                  iconH={<ArrowUpward style={{color:"green"}} />}
                                  color="blue"
                                
                                />
                                </Grid>
                      </div>
                      <section className={classes.tableAndUser}>
                        <div className={classes.user}>
                                <Typography className={classes.headtableAndUser} variant="h5" >درآمد کلی</Typography>
                        <UserCard />
                                </div>
                        <div className={classes.tableW}>
                        <Typography className={classes.headtableAndUser} variant="h5" >نمودار بازدیدهای اخیر</Typography>
                                <TableD />
                        </div>
                     
                </section>
                 </section>
                 
         </section>
               
                 </>
               
        );
};

export default Dashbord;