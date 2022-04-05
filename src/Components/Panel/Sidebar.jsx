import React ,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,List,Typography,ListItem,ListItemIcon,ListItemText,Button} from '@material-ui/core'
import {Dashboard,Person,Spellcheck,BorderColor,Announcement,InsertEmoticon,MeetingRoom} from '@material-ui/icons';
import {contextL} from '../Context/Context'
import aavatar from '../../Assets/imeges/Screenshot_2.jpg';
const useStyles = makeStyles((theme)=>({
              item:{
                      display: 'flex',
                      justifyContent: 'right',
                      alignItems: 'center',
                      [theme.breakpoints.down('xs')]:{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                                 },
                     
              },
              sidebarWrapper:{
                        backgroundImage: 'linear-gradient(195deg, #42424a 0%, #191919 100%);',
                        color:'#fafafa',
                        borderRadius:'0 0 0 8px',
                        padding: '10px 0px',
                        // position: 'fixed',
                        // margin: '15px 15px 0 0',
                        maxWidth:"280px",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height:'100vh',
                        [theme.breakpoints.down('xs')]:{
                                padding: '5px 0px',
                                // margin: '7px 7px 0 0',
                                         },

              },
              itemIcon:{
                color:'#fafafa',
              },
              sideHead:{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottom: '1px solid #888',
                      padding:'10px 0'
              },
              sideHeadSize:{
                      fontSize: '15px',
                      [theme.breakpoints.down('xs')]:{
                        display: 'none'
                }
                      
              },
              small: {
                width: theme.spacing(4),
                height: theme.spacing(4),
                marginLeft: '5px'
              },
              icon:{
                      minWidth:'30px',
                      
                },
                     
              itemText:{
                      display:'flex',
                      fontSize:'12px',
                      color:'#fafafa',
                      [theme.breakpoints.down('xs')]:{
                              display: 'none'
                      }
              },
              active:{
                      backgroundColor:'blue',
                      "&:hover": {
                        backgroundColor: 'blue'
                      },
                      borderRadius:"5px",
                      
              },
              buttonpanel:{
                      minWidth:'30px',
                width:"100%",
                "&:hover": {
                        backgroundColor: '#f500578c'
                      }
              },
              
              btnWrapper:{
                      display:'inline-block',
                      width:"94%",
                      
              }
             ,
             btnbtn:{
                     textAlign: 'center',
                    
             },
             btnSpan:{
                     "&hover" : {
                        color:"#eee !important",
                     },
                     [theme.breakpoints.down('xs')]:{
                             display:'none'
                     }
             },
             sidebarLink:{
                     display:'inline-block',
                     width:"100%",
                     [theme.breakpoints.down('xs')]:{
                        display:'inline'
                }
              
             },
          
           

}));
const Sidebar = ({userLSd}) => {
        const urls = useContext(contextL) 
        const [color,setColor] = useState(false)
        const linkU = window.location.href   
        const {treu,treu1,treu2,treu3,treu4,treu5,btn,setBtn} =urls
      
       useEffect(()=>{
                if(linkU.endsWith('/panel')){
                        setColor(true)
                        
                }else{
                        setColor(false)
                }
       },[linkU])
       
      const classes = useStyles()
        return (
               
                        <section className={`${classes.sidebarWrapper}`}>
                                <section>
                                        <section className={classes.sideHead}>
                                                <Avatar alt="Remy Sharp" className={classes.small} src={aavatar} />
                                                <Typography variant="h5" className={classes.sideHeadSize} > {userLSd.email} </Typography>   
                                        </section>
                                        <section className={classes.line}></section>
                                        <section className={classes.dashbord}>
                                <List>
                                <Link className={classes.sidebarLink} to="/panel">
                                                <ListItem button onClick={() => setBtn(!btn)} className={treu ||color ?`${classes.item} ${classes.active}`: classes.item}>
                                                        <ListItemIcon className={classes.icon}>
                                                                <Dashboard className={classes.itemIcon} />
                                                        </ListItemIcon>
                                                                <ListItemText primary="داشبورد"  className={classes.itemText} />
                                                </ListItem>
                                                </Link>
                                        
                                        <Link className={classes.sidebarLink} to="/SpellCheck">
                                                <ListItem button onClick={() => setBtn(!btn)} className={treu2 ?`${classes.item} ${classes.active}`: classes.item}>
                                                        <ListItemIcon className={classes.icon}>
                                                                <BorderColor className={classes.itemIcon} />
                                                        </ListItemIcon>
                                                                <ListItemText primary="ویراستار متن"  className={classes.itemText} />
                                                </ListItem>
                                        </Link>
                                        <Link className={classes.sidebarLink} to="/TextAnalysis">
                                        <ListItem button onClick={() => setBtn(!btn)} className={ treu1 ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <Spellcheck className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="تبدیل محاوره به رسمی"  className={classes.itemText} />
                                        </ListItem>
                                        </Link>
                                        <Link className={classes.sidebarLink} to="/Typos"><ListItem button onClick={() => setBtn(!btn)} className={treu3 ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <InsertEmoticon className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="اصلاح اشتباهات تایپی"  className={classes.itemText} />
                                        </ListItem></Link>
                                        <Link className={classes.sidebarLink} to="/Summary"> <ListItem button onClick={() => setBtn(!btn)} className={treu4 ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <Announcement className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="خلاصه سازی متن"  className={classes.itemText} />
                                        </ListItem></Link>
                                        <Link className={classes.sidebarLink} to="/Profile"><ListItem button onClick={() => setBtn(!btn)} className={treu5 ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <Person className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="پروفایل"  className={classes.itemText} />
                                        </ListItem></Link>
                                        
                                </List>
                                
                                </section>
                                </section>
                                <div className={classes.btnbtn}>
                                        <a href="/" className={classes.btnWrapper}>
                                        <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        className={classes.buttonpanel}
                                                        startIcon={<MeetingRoom />}
                                                >
                                                        <span className={classes.btnSpan}>خروج</span>
                                                </Button>
                                        
                                                </a>
                                        </div>
                        </section>
                       
        );
};

export default Sidebar;



