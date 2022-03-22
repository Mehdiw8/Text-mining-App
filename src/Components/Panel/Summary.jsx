import React,{useState} from 'react';
import axios from 'axios';
import {TextareaAutosize,Button,Box,CircularProgress,Input} from '@material-ui/core'
import {Publish,Delete} from '@material-ui/icons';
import {notify} from  '../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
import {useStyles} from "./Panel.Style/Page.style";
import HeadContent from './Panel Help C/HeadContent.jsx'
import FormInput from './Panel Help C/FormInput.jsx'
const Summary = () => {
        const textt="باشگاه خبرنگاران/ رئیس‌جمهور آمریکا به ادعاها درباره دیدار سناتور آمریکایی با وزیر خارجه ایران در حاشیه نشست مونیخ واکنش نشان داد و آن را نقض قانون «لوگان» خواند.به گزارش رویترز، دونالد ترامپ، رئیس جمهور آمریکا،در واکنش به انتشار خبری درباره دیدار سناتور کریس مورفی با محمد جواد ظریف وزیر امور خارجه ایران - در حاشیه کنفرانس امنیتی مونیخ - گفت: خبری خواندم که نوشته بود سناتور مورفی با ایرانی‌ها دیدار کرد. آیا چنین چیزی حقیقت دارد؟ من این خبر را وقتی که داشتم به اینجا می‌آمدم، دیدم. آیا چیزی هست که من باید بدانم؟ چون به نظر می‌رسد که این اقدام (دیدار سناتور کریس مورفی با محمد جواد ظریف) نقض قانون لوگان است.رئیس جمهور آمریکا افزود: چه اتفاقی افتاد؟ آیا شما (خبرنگاران) خبری درباره دیدار سناتور مورفی با ایرانی‌ها خواندید یا شنیدید؟ من که نمی‌دانم، همین الان که داشتم از خودرو بیرون می‌آمدم این خبر را خواندم.قانون لوگان قانونی فدرال در آمریکا است که بر اساس آن هرگونه مذاکره بدون مجوز مقامات آمریکایی با شهروندان دولت‌هایی -که درگیر مناقشه با آمریکا هستند- جرم محسوب می‌شود.این اظهارات در پی آن مطرح می‌شود که کریس مورفی، سناتور آمریکایی که در نشست مونیخ نیز حضور داشت، مدعی گفت‌وگو با محمدجواد ظریف، وزیر خارجه ایران، در هتل محل اقامت او شد. مورفی تاکید کرد هر چند اختیار اقدامات دیپلماتیک را از سوی دولت آمریکا نداشت، گفت‌وگو با مقام ایرانی را به سود کشورش و امنیت ملی آن می‌داند.ترامپ درباره موضوع اختلافات در واشنگتن و متهم شدن وزارت دادگستری آمریکا به مداخله در پرونده راجر استون، مشاور و دوست سابق خود، هم گفت: من به دادستان خود اطمینان کامل دارم؛ می‌دانید که از همان ابتدا دمکرات‌ها شروع به جنجال‌آفرینی کردند. آن‌ها در ابتدای کار موضوع روسیه را پیش کشیدند، بعد جنجال‌ها بر سر تحقیقات مولر بود و بعد از آن هم مدام درباره روسیه یاوه‌سرایی کردند. من راجر استون را نمی‌شناسم و وی نیز هیچ نقشی در ستاد انتخاباتی ما نداشت. باور دارم که اتفاقات بسیار سختی برای راجر استون روی داده است.او افزود: تیم من در شبکه‌های اجتماعی بسیار قوی عمل می‌کند و دست کم من هم صدایی در این میان دارم و می‌توانم با اخبار جعلی که در آن منتشر می‌شود، مقابله کنم. اینکه گفته شده است دادستان کل (ویلیام بار) می‌گوید من کار وی را دشوار کرده‌ام شاید درست باشد، ولی افراد زیادی هم هستند که نمی‌خواهند اتفاقات خوب روی بدهد و این اعتقاد من است نه اعتقاد وی و باید دیدگاهش را از خودش سوال کنید. شبکه‌های اجتماعی برای من بسیار اهمیت دارد و می‌خواهم در این فضا صدایی داشته باشم، زیرا در رسانه‌ها صدایی نداشته‌ام. درباره راجر استون نیز نظر خاصی ندارم، ولی باور دارم که رفتاری که با او شده است بسیار دور از انصاف بود.رئیس‌جمهور آمریکا در پاسخ به سوال خبرنگاری درباره افغانستان هم مدعی شد: ما نوزده سال است که درگیر جنگ در این کشور هستیم؛ نیرو‌های خود را به شکلی چشمگیر در این کشور کاهش داده‌ایم و در حال حاضر بیشتر به جای نیروی نظامی، در نقش ضابط قانون عمل می‌کنیم. کشتن چند میلیون نفر بسیار کار ساده‌ای است، ولی من نمی‌خواهم این کار را بکنم، می‌توانیم به سادگی آب خوردن این کار را بکنیم، صحبت من از بمب‌های هسته‌ای نیست، من از تسلیحات کاملا متعارف صحبت می‌کنم، من نمی‌خواهم چند میلیون نفر را بکشیم، من مایل به مذاکره با طالبان هستم، مدتی است این مذاکره دنبال می‌شود و آن‌ها این فرصت را دارند که به توافق برسند. این برایشان فرصت است."
        const [inputValue,setInputValue] = useState(textt)
        const [result,setResult] = useState('')
        const [wrongNum,setWrongNum] = useState(150)
        const [textH,setTextH] = useState(false)
        const [error,setError] = useState(false)
        let baseUrl = "http://api.text-mining.ir/api/"
        const clickHandler = ()=>{
                if(inputValue.length>0){
                        setTextH(true)
                        axios.get(baseUrl+'Token/GetToken?apikey=fa6141a9-2ca2-ec11-80f6-98ded002619b')
                        
                        .then((response) =>{
                        
                           let myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");
                                myHeaders.append("Authorization", "Bearer "+ response.data.token);
                          
                          let raw = JSON.stringify({
                                "Text":inputValue,
                                "SummaryWordCount": wrongNum,
                                "Method": "SFW"
                              });
                          let requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow'
                                };
                          
                                fetch("https://api.text-mining.ir/api/InformationRetrieval/Summarize", requestOptions)
                           .then(response => response.text())
                            .then(result => {
                                setTextH(false)
                                setResult(result)
                                
                            })
                            .catch(error => {
                                setError(true)
                            });
                          
                    
                        })
                        .catch(error => {
                                setError(true)
                            });     
                }
                else{
                    notify('متن یادت رفت 🙂','info')
                }
             
        }
        const changeHandler = (e)=>{
                setInputValue(e.target.value)
                console.log(inputValue);
                
        }
        const onDelHandler = ()=>{
                setInputValue('')
                
        }
        const wrongNumHandler = (e)=>{
                setWrongNum(e.target.value)
        }
       
        const classes = useStyles()
        return (
                <section>
                       <section className={classes.container}>
                         <div className={classes.contentWrapper}>
                                 <HeadContent 
                                         headText="دموی ابزار تبدیل محاوره به رسمی" 
                                         dis="این ابزار در پیش‌پردازش متن‌ها کاربرد دارد و بر اساس لیست کلمات موجود می‌تواند متن محاوره (عامیانه) را به رسمی تبدیل کند.."
                                 />
                                 <form className={classes.formWrapper}>
                                         <label htmlFor="TextareaAutosize" className={classes.labelArea}>متن ورودی : </label>
                                        <TextareaAutosize onChange={changeHandler}
                                         value={inputValue} 
                                         className={classes.mytextarea} aria-label="minimum height" minRows={3}
                                        name="textAnalysis" id="" maxRows={10}
                                         placeholder="متن رو بزار اینجا 😉✍
                                                                        "/>
                                                                        
                                 </form>
                                 <FormInput
                                          label="تعداد کلمات متن خلاصه">
                                                <Input type="number" className={classes.formInput2} value={wrongNum} onChange={wrongNumHandler} placeholder="تعداد کلماتی که جایگزین کلمات اشتباه می‌شوند" inputProps={{ 'aria-label': 'description' }} />
                                          </FormInput>
                            <div className={classes.btnWrpper}>
                                  <Button onClick={onDelHandler} variant="contained" color="secondary" endIcon={<Delete/>} className={classes.wrpbtn}>
                                 <span className={classes.btnText}> پاک کردن</span>
                                        </Button>
                                        <Button onClick={clickHandler}  variant="contained" color="primary" endIcon={<Publish/>} className={classes.wrpbtn}>
                                                <span className={classes.btnText}>ارسال</span>
                                        </Button>
                                 </div>
                                 <div className={classes.resultWrapper}>
                                       <span> {textH ?   <Box sx={{
                                        display: 'flex'
                                        ,justifyContent: 'center',
                                        alignItems: 'center',
                                
                                 }}>
                                <CircularProgress color="secondary" size={70} />
                                 </Box>: result }</span>
                                </div>
                                       <span className={classes.erorrW}> {error && 'سیستم در حال بروزرسانی می باشد'} </span>
                           
                                
                         </div>
                      
                </section>
                <ToastContainer rtl />
                </section>
        );
};

export default Summary;

