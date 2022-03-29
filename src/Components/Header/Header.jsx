import React,{useState} from 'react';
import styles from '../CSSFile/Header.module.css';
import { FaHome ,FaUsers,FaUserPlus ,FaUserTimes,FaUserCircle} from "react-icons/fa";
import { MdOutlinePhonelinkRing ,MdQuiz } from "react-icons/md";
import { HiOutlineLogin , HiOutlineMenu ,HiOutlineX} from "react-icons/hi";
import {Link,useNavigate} from "react-router-dom"
const Header = () => {
        const[humber,setHumber]=useState(false)
        const[user,setUser] = useState(false)
        const navi = useNavigate()
       
                
        return (
                <div className={styles.headWrapper}>
                        <header className={styles.header}>
                             <section className={styles.headerContent}>

                                     
                                 <section className={styles.logo} onClick={()=>{navi('/')}}>
                                        <div>
                                               <span>ی</span>
                                               <span>س‍</span>
                                               <span>ر</span>
                                               <span>ا</span>
                                               <span>ف‍</span>
                                               <span>ی</span>
                                               <span>و</span>
                                               <span>ا</span>
                                               <span>ک‍</span>
                                               <span>ن</span>
                                               <span>ت‍‍</span>
                                               <span>م‍</span>

                                        </div>
                                </section>



                                {/* menu Responsive */}
                               <section className={styles.iconmenuWrapper}>
                                <div className={styles.humbergerMenu}>
                                               <div className={humber ? styles.humbergerMenuT :styles.humbergerMenuF} onClick={()=>{
                                                       setHumber((prevHumber) => !prevHumber)
                                                       setUser(false)
                                               }}>
                                               <HiOutlineMenu />
                                                <HiOutlineX />
                                               </div>
                                        </div>
                                        <div className={styles.signUpIcon}>
                                                <div className={user ? styles.signUpIconT : styles.signUpIconF} onClick={()=> {
                                                        setUser(prevUser => !prevUser)
                                                        setHumber(false)
                                                }}>
                                        <FaUserCircle />
                                        <FaUserTimes />
                                        </div>
                                </div>
                               </section>


                               {/* Menu min width 768px */}
                                <div className={styles.line}></div>
                                <menu className={styles.menuWrapper}>
                                       <nav className={styles.menuWrapperUl1}>
                                                <ul>
                                                        <li><Link to="/Home">
                                                                 <FaHome /> 
                                                                خانه</Link>
                                                                 </li>
                                                        <li>
                                                        <a href="/">
                                                                <MdQuiz />
                                                                سوالات متداول</a>
                                                                </li>
                                                        <li><a href="/">
                                                                <FaUsers />
                                                                درباره ما</a>
                                                                </li>
                                                        <li><a href="/">
                                                                <MdOutlinePhonelinkRing />
                                                                تماس با ما</a>
                                                                </li>
                                                </ul>
                                       </nav>

                                       <nav className={styles.menuWrapperUl2}>
                                               <ul>
                                                       <li><Link to="/SignUp">
                                                               <FaUserPlus />
                                                               ثبت نام</Link></li>
                                                       <li>
                                                       <Link to="/Login">
                                                               <HiOutlineLogin />
                                                               ورود</Link></li>
                                               </ul>
                                       </nav>
                                </menu>



                                {/* menuResponsive */}
                             </section>


                              <section className={styles.menuRContainer}>

                                                {/* main menu RESPONSIVE */}
                                        <nav className={`${styles.menuRContent} ${humber ? styles.menuRContentT : styles.menuRContentF}`} >
                                                <ul>
                                                <li><Link to="/Home">
                                                        <FaHome /> 
                                                        خانه</Link>
                                                        </li>
                                                <li>
                                                <a href="/">
                                                        <MdQuiz />
                                                        سوالات متداول</a>
                                                        </li>
                                                <li><a href="/">
                                                        <FaUsers />
                                                        درباره ما</a>
                                                        </li>
                                                <li><a href="/">
                                                        <MdOutlinePhonelinkRing />
                                                        تماس با ما</a>
                                                        </li>
                                                                </ul>                               
                                        </nav>

                                                {/* User menu Responsive */}
                                        <nav className={`${styles.userRContent} ${user ? styles.userRContentT : styles.userRContentF } `}>
                                                 <ul>
                                                       <li><Link to="/SignUp">
                                                               <FaUserPlus />
                                                               ثبت نام</Link></li>
                                                       <li>
                                                       <Link to="/Login">
                                                               <HiOutlineLogin />
                                                               ورود</Link></li>
                                               </ul>
                                        </nav>
                            </section>
                                       
                        </header>
                       
                </div>
        );
};

export default Header;