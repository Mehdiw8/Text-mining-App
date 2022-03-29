import React,{useState} from 'react';
import styles from '../CSSFile/Profilepanel.module.css';
import ChangePass from './profile/ChangePass'
import Changeprofile from './profile/Changeprofile'
import useTitle from '../../Customhooks/useTitle';
const Profile = () => {
        useTitle('پروفایل')
        const [active,setActive]=useState(false)
        return (
                <section className={styles.profileWrapper}>
                                <h3>تغییر مشخصات</h3>
                    <section className={styles.profileContent}>
                       <div className={styles.listWrapper}>
                        <ul>
                                <li className={!active && styles.active} onClick={() => setActive(false)}  >تغییر پروفایل</li>
                                <li className={active && styles.active} onClick={() => setActive(true)} >تغییر کلمه عبور</li>
                           </ul>
                        </div>
                        <div className={styles.mainContent}>
                        {active ? <ChangePass />:
                       <Changeprofile /> }
                        </div>
                    </section>
                </section>
        );
};

export default Profile;