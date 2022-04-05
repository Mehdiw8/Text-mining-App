import React from 'react';
import styles from '../../CSSFile/UserCards.module.css';
import {Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import aavatar from '../../../Assets/imeges/Screenshot_2.jpg';
const useStyles = makeStyles((theme)=>({
        small: {
                width: theme.spacing(8),
                height: theme.spacing(8),
                margin:"20px"
              },
   

}));
const UserCard = ({userLSd}) => {
        const classes = useStyles()
        return (
                <section className={styles.card}>
                        <div className={styles.avatarWrapper}>
                                 <Avatar alt="Remy Sharp" className={classes.small} src={aavatar} />
                        </div>
                        <div className={styles.nameAVatar}>
                                <h5>{userLSd.name} {userLSd.family} </h5>
                                <p>16 هزار دنبال کننده</p>
                        </div>
                        <div className={styles.minicard}>
                               <p>درآمد کلی</p>
                                <p> 16 میلیون تومان</p>
                                </div>
                </section>
        );
};

export default UserCard;