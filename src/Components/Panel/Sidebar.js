import React ,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,List,Typography,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import {Dashboard,Person,Spellcheck,BorderColor,Announcement,InsertEmoticon} from '@material-ui/icons';
import {contextL} from '../Context/Context'
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
                        borderRadius:'8px',
                        padding: '10px',
                        margin: '15px',
                        maxWidth:"280px",
                        [theme.breakpoints.down('xs')]:{
                                padding: '5px',
                                margin: '7px',
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
                      fontSize: '12px',
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
                      
              }
              
              
             
              

}));
const Sidebar = () => {
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
                <section className={classes.sidebarWrapper}>
                        
                        <section className={classes.sideHead}>
                                <Avatar alt="Remy Sharp" className={classes.small} src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1645434707~exp=1645435307~hmac=cfb6d84875148bd13124446a35daddbb73704cfdf717edbd37672cd391b1d177&w=996" />
                                <Typography variant="h6" className={classes.sideHeadSize} >aeeq18@gmail.com</Typography>   
                        </section>
                        <section className={classes.line}></section>
                        <section className={classes.dashbord}>
                             <List>
                             <Link to="/panel">
                                        <ListItem button onClick={() => setBtn(!btn)} className={treu ||color ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <Dashboard className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="داشبورد"  className={classes.itemText} />
                                        </ListItem>
                                        </Link>
                                    <Link to="/TextAnalysis">
                                     <ListItem button onClick={() => setBtn(!btn)} className={ treu1 ?`${classes.item} ${classes.active}`: classes.item}>
                                         <ListItemIcon className={classes.icon}>
                                                 <Spellcheck className={classes.itemIcon} />
                                         </ListItemIcon>
                                                 <ListItemText primary="تحلیل متن"  className={classes.itemText} />
                                     </ListItem>
                                     </Link>
                                     <Link to="/SpellCheck">
                                        <ListItem button onClick={() => setBtn(!btn)} className={treu2 ?`${classes.item} ${classes.active}`: classes.item}>
                                                <ListItemIcon className={classes.icon}>
                                                        <BorderColor className={classes.itemIcon} />
                                                </ListItemIcon>
                                                        <ListItemText primary="ویراستار متن"  className={classes.itemText} />
                                        </ListItem>
                                     </Link>
                                     <Link to="/Typos"><ListItem button onClick={() => setBtn(!btn)} className={treu3 ?`${classes.item} ${classes.active}`: classes.item}>
                                         <ListItemIcon className={classes.icon}>
                                                 <InsertEmoticon className={classes.itemIcon} />
                                         </ListItemIcon>
                                                 <ListItemText primary="اصلاح اشتباهات تایپی"  className={classes.itemText} />
                                     </ListItem></Link>
                                     <Link to="/Summary"> <ListItem button onClick={() => setBtn(!btn)} className={treu4 ?`${classes.item} ${classes.active}`: classes.item}>
                                         <ListItemIcon className={classes.icon}>
                                                 <Announcement className={classes.itemIcon} />
                                         </ListItemIcon>
                                                 <ListItemText primary="خلاصه سازی متن"  className={classes.itemText} />
                                     </ListItem></Link>
                                     <Link to="/Profile"><ListItem button onClick={() => setBtn(!btn)} className={treu5 ?`${classes.item} ${classes.active}`: classes.item}>
                                         <ListItemIcon className={classes.icon}>
                                                 <Person className={classes.itemIcon} />
                                         </ListItemIcon>
                                                 <ListItemText primary="پروفایل"  className={classes.itemText} />
                                     </ListItem></Link>
                             </List>
                        </section>
                </section>
        );
};

export default Sidebar;



