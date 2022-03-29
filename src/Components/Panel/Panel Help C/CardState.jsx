import React from 'react';
import styles from '../../CSSFile/CardState.module.css'
const CardState = ({h6,p1,p2,icon,iconH,color}) => {
        return (
                <section className={styles.cardWrapper}>
                        <div className={styles.CardContent}>
                                <h4>{h6}</h4>
                                <span>{p1}</span>
                                <p> {p2}{iconH} </p>
                        </div>
                        <div className={`${styles.cardIcon}
                         ${color ==='green'? styles.color1 
                         :color === 'yello'? styles.color2
                         :color === 'orange'? styles.color3
                         :color === 'blue'&& styles.color4       
                        }`}
                        
                        
                        >
                                {icon}
                        </div>
                </section>
        );
};

export default CardState;