import React from 'react';
import styles from '../CSSFile/Servicess.module.css'

const Services = () => {
        return (
                <section className={styles.servicesWrapper}>
                        <h1>خدمات ما</h1>
                        <div className={styles.service}>
                                <div>
                                        <h3>ویراستار متن</h3>
                                        <p>این ابزار، متون موردنظر شما را براساس دستور خط و فرهنگ املایی مصوب فرهنگستان زبان و ادب فارسی بررسی کرده و تمامی نویسه‌های متن را با استانداردهای موجود مطابقت می‌دهد. بطور کلی می‌توان گفت که ویراستار متن به شما کمک می‌کند تا متون فارسی را زیبا‌تر بنویسید. همچنین این اطمینان داده می‌شود که هیچ بخشی از متن‌های شما ذخیره نمی‌شود و پردازش متون بر روی مرورگر انجام خواهد شد.</p>
                                </div>
                                <div>
                                        <h3>تبدیل محاوره به رسمی</h3>
                                        <p>یکی از مشکلات رایج در پردازش متون نظرات وجود کلمات به شکل غیر رسمی (محاوره‌ای) و عبارات اختصاری برای سادگی در نگارش متن نظر می‌باشد. درک معنای این‌گونه کلمات برای انسان کار راحتی است در حالیکه در پردازش خودکار ماشینی متون، وجود این عبارات مشکل‌ساز خواهد بود. لذا سعی می‌شود در فاز پیش‌پردازش این‌گونه عبارات با شکل رسمی و صحیح آنها (که مطابق با پیکره‌های متن رسمی، لغت‌نامه‌ها و سایر دانش‌نامه‌ها موجود است) جایگزین شود.
                                            برای این‌منظور مشابه ریشه‌یاب طراحی شده، کلمات به دو گروه فعل و غیر فعل تقسیم شده و در هر گروه وندهای (پیشوند و پسوند) کلمات و ریشه (بُن) کلمه بصورت مجزا بوسیله مجموعه‌ای از قوانین بررسی می‌شوند. همچنین برای ریشه (بُن) کلمات در هر دو گروه کلمات لیستی از کلمات و اختصارات که حالت استثنا دارند، استفاده شده است.</p>
                                        </div>
                                <div>
                                        <h3>اصلاح اشتباهات تایپی</h3>
                                        <p>با بررسی اولیه متون شبکه‌های اجتماعی و نظرات می‌توان پی برد که علاوه بر مشکلات مربوط به شکل اختصاری یا محاوره‌ای کلمات، غلط‌های املایی زیادی سهواً یا عمداً (برای راحتی در نگارش) در متون زبان فارسی وجود دارد. هدف از تولید این ابزار تصحیح خودکار خطاهای املایی ناشی از تایپ اشتباه کلمات در متون می‌باشد. بدین منظور به ازای کلمات بدون مفهوم، شبیه‌ترین کلمه از نظر املایی و تحلیل‌های آماری جایگزین آن خواهد شد.</p>
                                </div>
                                <div>
                                        <h3>خلاصه سازی متن</h3>
                                        <p>این ابزار جملات مهم متن را طوری انتخاب می‌کند که علاوه براینکه مضمون اصلی متن حفظ شده باشد، متن خروجی از پیوستگی معنایی کافی نیز برخوردار باشد. کاربرد اصلی این ابزار، خلاصه‌سازی اخبار (مربوط به یک رویداد) از سایت‌های مختلف است. البته در نمایش خلاصه محتوا در نتایج موتورهای جستجو و ... نیز کاربرد دارد.</p>
                                </div>
                        </div>
                </section>
        );
};

export default Services;