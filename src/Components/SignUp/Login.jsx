import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from '../CSSFile/SignUp.module.css';
import {validate} from './Validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from  '../helperJs/reactTostify'
import useTitle from '../../Customhooks/useTitle';
const Login = () => {
        useTitle('ثبت نام / ورود')
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
        useEffect(()=>{
                setErrors(validate(data))
                const scrollDown = ()=>{
                        setTimeout(() => {
                        window.location.hash = '#ScrollHere';
                        }, 500);
                }
                scrollDown()
               
        },[data,focus])

        const changeHandler = (e) =>{
                if(e.target.name === 'isAccepted'){
                        setDate({...data,[e.target.name]:e.target.checked})
                }
                else{
                    setDate({...data,[e.target.name]: e.target.value})  
                }
        }
        const focusHandler = (e)=>{
                e.preventDefault();
                setFocus({
                        ...focus,[e.target.name]:true
                })
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
                        notify('لطفا موارد خواسته شده را تکمیل کنید !','error')
                }
        }
      
        return (

                <div className={styles.formWrapper}>
                        <div id="ScrollHere" name="ScrollHere"></div>
                   <form onSubmit={submitHandler} className={styles.forms}>
                           <h1 className={styles.h11}> ورود</h1>
                             
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
                       
                           
                           
                           <div className={styles.sLoWrapper}>
                           <button className={styles.buttonSign} type= "submit" >ورود</button>
                           <span>
                                      
                           <Link to="/SignUp">ثبت نام</Link> 
                           </span>
                           </div>
                   </form>
                   <ToastContainer rtl />
                </div>
        );
};

export default Login;