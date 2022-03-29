import React,{useState,useContext} from 'react';
import axios from 'axios';
import {TextareaAutosize,Button,Box,CircularProgress} from '@material-ui/core'
import {Publish,Delete} from '@material-ui/icons';
import {notify} from  '../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
import {useStyles} from "./Panel.Style/Page.style";
import HeadContent from './Panel Help C/HeadContent.jsx'
import {contextL} from '../Context/Context'
import useTitle from '../../Customhooks/useTitle';
const TextAnalysis = () => {
        const getApi = useContext(contextL)
        const {apikey} = getApi
        useTitle('تبدیل محاوره به رسمی')
        const [inputValue,setInputValue] = useState(" داشتم مي رفتم برم، ديدم گرفت نشست، گفتم بذار بپرسم ببينم مياد نمياد ديدم ميگه نميخوام بيام بذار برم بگيرم بخوابم نمیتونم بشینم. ساعت چن میتونین بیاین")
        const [result,setResult] = useState('')
        const [textH,setTextH] = useState(false)
        const [error,setError] = useState(false)
        let baseUrl = "http://api.text-mining.ir/api/"
        const clickHandler = ()=>{
                if(inputValue.length>0){
                        setTextH(true)
                        axios.get(baseUrl+`Token/GetToken?apikey=${apikey}`)
                        
                        .then((response) =>{
                        
                           let myHeaders = new Headers();
                           myHeaders.append("Content-Type", "application/json");
                          myHeaders.append("Authorization", "Bearer "+ response.data.token);
                          
                          let raw = JSON.stringify(inputValue);
                          let requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow'
                                };
                          
                           fetch("https://api.text-mining.ir/api/TextRefinement/FormalConverter", requestOptions)
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
        }
        const onDelHandler = ()=>{
                setInputValue('')
        }
       
       
        const classes = useStyles()
        return (
                <section>
                       <section className={classes.container}>
                         <div className={classes.contentWrapper}>
                                 <HeadContent 
                                         headText="ابزار تبدیل محاوره به رسمی" 
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

export default TextAnalysis;
