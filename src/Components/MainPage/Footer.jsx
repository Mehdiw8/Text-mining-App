import React from 'react';
import '../CSSFile/footerStyle.css';
import {Instagram,Facebook,Twitter,Telegram,LinkedIn} from '@material-ui/icons';
const Footer = () => {
        return (
                <footer className="footer-News">
                <div className="footer">
                 
                    <div className="quick-access">
                        <h3>دسترسی سریع</h3>
                        <ul className="news">
                            <li><a href="#">ثبت نام</a></li>
                            <li><a href="#">ورود به پنل</a></li>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">سوالات متداول</a></li>
                            <li><a href="#">تماس با ما</a></li>
                        </ul>
                    </div>
         
                    <div className="social">
                     <ul className="social-wrapper">
                         <li className="social"><a href="#"><Facebook /></a></li>
                         <li className="social"><a href="#"><Twitter /></a></li>
                         <li className="social"><a href="#"><Instagram /></a></li>
                         <li className="social"><a href="#"><Telegram /></a></li>
                         <li className="social"><a href="#"><LinkedIn /></a></li>
                     </ul>
                    </div>
                    <p className="news-line-1"> <a href="#"> تازه ترین ها </a><a href="#"> خدمات </a><a href="#"> بروزرسانی ها </a></p>
                    <p className="news-line line-hidden">برگرفته از  متن کاوی فارسی یار</p>
                    <p className="news-line copy-right">تمامی حقوق این سایت  محفوظ است</p>
                </div>
            </footer>
        );
};

export default Footer;