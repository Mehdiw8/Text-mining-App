import React,{useState} from 'react';
import axios from 'axios';
import {TextareaAutosize, Box,Button,Input,CircularProgress} from '@material-ui/core'
import {Publish,Delete} from '@material-ui/icons';
import {notify} from  '../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
import {useStyles} from "./Panel.Style/Page.style";
import HeadContent from './Panel Help C/HeadContent';
import FormInput from './Panel Help C/FormInput'
const Typos = () => {
        const [inputValue,setInputValue] = useState('فهوه با مبات میجسبد')
        const [result,setResult] = useState('')
        const [wrongNum,setWrongNum] = useState(3)
        const [textH,setTextH] = useState(false)
        const [erorr,setErorr] = useState(false)
        let baseUrl = "http://api.text-mining.ir/api/"
        const clickHandler = ()=>{
                if(inputValue.length>0){
                        setTextH(true)
                        axios.get(baseUrl+'Token/GetToken?apikey=fa6141a9-2ca2-ec11-80f6-98ded002619b')
                        
                        .then((response) =>{
                         
                          let myHeaders = new Headers();
                          myHeaders.append("Authorization", "Bearer "+ response.data.token);
                          myHeaders.append("Content-Type", "application/json");
                          
                          let raw = JSON.stringify({
                            "Text": inputValue,
                            "Normalize": true,
                            "CandidateCount": wrongNum
                          });
                          
                          let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow'
                          };
                          
                          fetch("https://api.text-mining.ir/api/TextRefinement/SpellCorrector", requestOptions)
                            .then(response => response.text())
                            .then(result => {
                                setTextH(false)
                                setResult(result)
                                
                            })
                            .catch(error => {
                                setErorr(true)
                            });
                          
                    
                        })
                        .catch(error => {
                                setErorr(true)
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
        const wrongNumHandler = (e)=>{
                        setWrongNum(e.target.value)
        }
       
        const classes = useStyles()
        return (
                <section>
                       <section className={classes.container}>
                         <div className={classes.contentWrapper}>
                                 <HeadContent
                                 headText='ابزار اصلاح اشتباهات تایپی'
                                 dis='این ابزار در پیش‌پردازش متن‌ها کاربرد دارد و بر اساس لیست کلمات موجود می‌تواند اشتباهات تایپی را اصلاح کند.'
                                  />
                                
                                 <form className={classes.formWrapper}>
                                         <label htmlFor="TextareaAutosize" className={classes.labelArea}>متن ورودی : </label>
                                        <TextareaAutosize onChange={changeHandler} value={inputValue} className={classes.mytextarea} 
                                        name="textAnalysis" id="" maxRows={10} minRows={3} aria-label="maximum height"
                                         placeholder="متن رو بزار اینجا 😉✍
                                                                        "/>
                                                                        
                                 </form>
                               
                                          <FormInput
                                          label="تعداد کلمات جایگزین">
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
                                       <span> {textH ? 
                                       <Box sx={{
                                        display: 'flex'
                                        ,justifyContent: 'center',
                                        alignItems: 'center',
                                
                                 }}>
                                <CircularProgress color="secondary" size={70} />
                                 </Box>
                                       : result }</span>
                                </div>
                                       <span className={classes.erorrW}> {erorr && 'سیستم در حال بروزرسانی می باشد'} </span>
                           
                                
                         </div>
                      
                </section>
                <ToastContainer rtl />
                </section>
        );
};

export default Typos;
// {textH && result}