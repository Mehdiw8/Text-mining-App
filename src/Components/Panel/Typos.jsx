import React,{useState} from 'react';
import axios from 'axios';
import {TextareaAutosize, Typography,Button,Input} from '@material-ui/core'
import { makeStyles  } from '@material-ui/core/styles';
import {Publish,Delete} from '@material-ui/icons';
import {notify} from  '../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
const useStyles = makeStyles((theme)=>({
        container:{
                paddingRight:'20px',
                marginBottom:'2rem',
                
        },
        headContent:{
                width:'95%',
                backgroundColor:'#0faf73',
                boxShadow:'0 3px 4px rgb(0 0 0 / 10%)',
                borderRadius:'8px',
                lineHeight:'24px',
                padding:'8px 15px 12px 15px',
                marginTop:'-30px',
                
                [theme.breakpoints.down('xs')]:{
                        width:'100%',
                }
                
        },
        ttext:{
                color:'#fff',
                fontSize:'12px',
                
                
        },
        texxt:{
                fontSize:'16px',
                margin:'0 0 8px 0 '
        },
        contentWrapper:{
                backgroundColor:'#fff',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                width:'80%',
                borderRadius:'8px',
                marginTop:'5rem',
                boxShadow:'0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
                [theme.breakpoints.down('xs')]:{
                        width:'100%',
                        paddingLeft:'3px'
                }

        },
        mytextarea:{
                minHeight:'32px',
                width:"95%",
                margin:'25px auto 20px auto ',
                resize: 'none',
                border:'none',
                outline:'none',
                display: 'block',
               
                [theme.breakpoints.down('xs')]:{
                        width:'100%',
                }
        },
        formWrapper:{
                width:"100%",
                padding:'0 7px 0 0',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'baseline',
                minHeight: '200px',
                maxHeight: '400px',
                position: 'relative',
        },
        btnWrpper:{
                width:'100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                margin: '20px 0 5px 115px',
                [theme.breakpoints.down('xs')]:{
                        margin:'20px 0 5px auto',
                        fontSize:'12px',
                }
        },
        btnText:{
                margin:' 0px 10px 0 5px',
                fontSize:'12px',
                
        },
        wrpbtn:{
                padding:'7px 10px',
                margin:'0 10px',
        },
        resultWrapper:{
                width:'100%',
                padding: '1rem 3rem',
                borderTop: '1px dashed #aaa ',
                marginTop: '1rem',
                color: '#666',
               
        },
        formWrapper2:{
                width:'100%',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'baseline',
                padding:'7px 20px',
                [theme.breakpoints.down('xs')]:{
                        padding:'7px 5px',
                }
        },
        formInput2:{
                fontSize:'11px',
                width:'80%',
                
                [theme.breakpoints.down('xs')]:{
                        width:'100%'
                }
        },
        formLabel:{
                fontSize:'14px',
                color:'#aaa',
                
                
        },
        erorrW:{
                color:'red',
                animation: "$erro 1s ease-in-out alternate infinite",
        },
        "@keyframes erro": {
                "0%": {
             
                  transform: "scale(1)"
                },
                "50%": {
                      
                        transform: "scale(1.02)"
                      },
                "100%": {
                      
                        transform: "scale(1.03)"
                }
              },
              labelArea:{
                      fontSize:'10px',
                      opacity:'0.8',
                      position:'absolute',
                      right:'24px',
                      top:'9px'
                      

              }
     


}));
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
                              console.log(error);
                            });
                          
                    
                        })
                        .catch(error => {
                                setErorr(true)
                              console.log(error);
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
                        console.log(wrongNum)
                
        }
       
        const classes = useStyles()
        return (
                <section>
                       <section className={classes.container}>
                         <div className={classes.contentWrapper}>
                                 <div className={classes.headContent}>
                                       <Typography variant="h5" className={`${classes.ttext} ${classes.texxt}`}>
                                       دموی ابزار اصلاح اشتباهات تایپی
                                               </Typography>         
                                               <Typography  variant="body1" color="initial" className={classes.ttext}>
                                               این ابزار در پیش‌پردازش متن‌ها کاربرد دارد و بر اساس لیست کلمات موجود می‌تواند اشتباهات تایپی را اصلاح کند.
</Typography>
                                 </div>
                                 <form className={classes.formWrapper}>
                                         <label htmlFor="TextareaAutosize" className={classes.labelArea}>متن ورودی : </label>
                                        <TextareaAutosize onChange={changeHandler} value={inputValue} className={classes.mytextarea} 
                                        name="textAnalysis" id="" maxRows={10} aria-label="maximum height"
                                         placeholder="متن رو بزار اینجا 😉✍
                                                                        "/>
                                                                        
                                 </form>
                                 <form className={classes.formWrapper2} noValidate autoComplete="off" >
                                         <label className={classes.formLabel} htmlFor="formInput2">تعداد کلمات جایگزین </label>
                                                <Input type="number" className={classes.formInput2} value={wrongNum} onChange={wrongNumHandler} placeholder="تعداد کلماتی که جایگزین کلمات اشتباه می‌شوند" inputProps={{ 'aria-label': 'description' }} />
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
                                       <span> {textH ? "loading ..."  : result }</span>
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