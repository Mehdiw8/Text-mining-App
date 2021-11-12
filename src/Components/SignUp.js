import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from './CSSFile/SignUp.module.css';
import {validate} from './Validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from  './helperJs/reactTostify'
const SignUp = () => {

        const[data,setDate]=useState({
              name:'',
              family:'',
              email:'',
              password:'',
              confirmPassword:'',
              isAccepted:false,  
        })
        const[error,setErrors] = useState({})
        const [focus,setFocus] = useState({})
        const [checkC,setCheckC]= useState(false)
        const [valid,setValid]=useState('')

        useEffect(()=>{
                setErrors(validate(data))
               
        },[data,focus])

        const changeHandler = async(e) =>{
                e.preventDefault();
                if(e.target.name === 'isAccepted'){
                        setDate({...data,[e.target.name]:e.target.checked})
                }
                else{
                    setDate({...data,[e.target.name]: e.target.value})  
                }
           if( e.target.value.length>0){
              setValid('slam')
               
           }else{
               setValid('bye')
                
           }
        }
        const focusHandler = (e)=>{
                e.preventDefault();
                setFocus({
                        ...focus,[e.target.name]:true
                })
        }
        const checkBoxHandler = ()=>{
                setCheckC(true)
        }
        const submitHandler = (e)=>{
                e.preventDefault()
                if(!Object.keys(error).length){
                        notify('درخواست شما با موفقیت انجام شد','success')
                }
             
                else{
                        setFocus({
                                name:true,
                                family:true,
                                email:true,
                                password:true,
                                confirmPassword:true,
                        })
                        setCheckC(true)
                        notify('لطفا مقادیر خواسته شده را تکمیل کنید !','error')
                }
        }
      
        return (
                <div className={styles.formWrapper}>
                   <form onSubmit={submitHandler}>
                           <h1>ثبت نام</h1>
                           <div className={styles.field}>
                                  <div className={styles.fieldContent}>
                                  <input className={(error.name && focus.name) ? styles.setred:styles.setGreen} type="text" name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                                   <label htmlFor="name">نام </label>
                                  </div>
                                   {error.name && focus.name && <span>{error.name}</span>}

                           </div>
                           <div className={styles.field}>
                                   <div className={styles.fieldContent}>
                                   <input className={(error.family && focus.family) ? styles.setred:styles.setGreen} 
                                   type="text" name='family' value={data.family} onChange={changeHandler} onFocus={focusHandler} />
                                   <label htmlFor="name">نام و نام خانوادگی </label>
                                   </div>
                                   {error.family && focus.family && <span>{error.family}</span>}
                           </div>
                           <div className={styles.field}>
                                   <div className={styles.fieldContent}>
                                   <input className={(error.email && focus.email) ? styles.setred:styles.setGreen} 
                                   type="text" name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                                   <label htmlFor="name">ایمیل </label>
                                   </div>
                                   {error.email && focus.email && <span>{error.email}</span>}
                           </div>
                           <div className={styles.field}>
                                   <div className={styles.fieldContent}>
                                   <input className={(error.password && focus.password) ? styles.setred:styles.setGreen}
                                    type="password" name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                                   <label htmlFor="name">رمز </label>
                                   </div>
                                   {error.password && focus.password &&<span>{error.password}</span>}
                           </div>
                           <div className={styles.field}>
                                   <div className={styles.fieldContent}>
                                   <input className={(error.confirmPassword && focus.confirmPassword) ? styles.setred:styles.setGreen}
                                    type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                                   <label htmlFor="name">تکرار رمز </label>
                                   </div>
                                   {error.confirmPassword && focus.confirmPassword && <span>{error.confirmPassword}</span>}
                           </div>
                           
                           <div className={styles.field}>
                                   <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onClick={checkBoxHandler} />
                                   <label htmlFor="name">با قوانین سایت موافقم </label>
                                   {error.isAccepted && checkC && <span>{error.isAccepted}</span>}
                           </div>
                           <div className={styles.sLoWrapper}>
                           <button type= "submit" >ثبت نام</button>
                           <span>
                                    <p> قبلا ثبت نام کردی؟</p>  
                           <Link to="/">ورود</Link> 
                           </span>
                           </div>
                   </form>
                   <ToastContainer />
                </div>
        );
};

export default SignUp;