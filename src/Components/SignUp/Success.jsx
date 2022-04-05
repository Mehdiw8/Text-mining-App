import React from 'react';
import styles from '../CSSFile/Success.module.css';
const Success = () => {
        return (
                <div className={styles.successWrapper}>
                        <h3 className={styles.headS}>
                                اکانت شما با موفقیت ساخته شده                    
                                  </h3>
                      
                      <a className={styles.loginS} href="/Login">
                              ورود به اکانت                             
                      </a>
                </div>
        );
};

export default Success;