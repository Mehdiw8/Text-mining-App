import React from 'react';
import styles from './CSSFile/Responsive.module.css';
import { FaHome ,FaUsers,FaUserPlus,FaUserCircle } from "react-icons/fa";
const ResponsiveHeader = () => {
        return (
                <>
                        <header className={styles.headerContainer}>
                                <section className={styles.headerContent}>
                                        <section className={styles.logo}>
                                                <div>
                                                <span>S</span>
                                                <span>p</span>
                                                <span>e</span>
                                                <span>l</span>
                                                <span>l</span>
                                                <span>C</span>
                                                <span>h</span>
                                                <span>e</span>
                                                <span>c</span>
                                                <span>k</span>
                                                <span>e</span>
                                                <span>r</span>
                                                </div>
                                        </section>
                                        <section className={styles.menuWrapper}>
                                                <div className={styles.aciveMenu}>
                                                       <div className={styles.line}></div> 
                                                       <div className={styles.line}></div> 
                                                       <div className={styles.line}></div> 
                                                  </div>
                                                  <div className={styles.activeLogin}>
                                                        <FaUserCircle />
                                                          </div>               
                                        </section>
                                </section>
                        </header>
                </>
        );
};

export default ResponsiveHeader;