import React , {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import styles from '../CSSFile/SignUp.module.css';
import {validate} from './Validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from  '../helperJs/reactTostify'
import useTitle from '../../Customhooks/useTitle';
import DataContextLS from '../Context/DataContextLS'


const SignUp = () => {
        useTitle('ثبت نام / ورود')
       const[ users,setUsers]= useState([])
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
        const navi = useNavigate()
        const [goNextPage ,setgoNextPage] = useState(false)
        useEffect(()=>{
                setErrors(validate(data,'signUp'))
                const scrollDown = ()=>{
                        setTimeout(() => {
                        window.location.hash = '#ScrollHere1';
                        }, 500);
                }
                scrollDown()
                
                
        },[data])
        //inja data bod bra update
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
        const checkBoxHandler = ()=>{
                setCheckC(true)
        }
        const submitHandler = (e)=>{
                e.preventDefault()
                if(!Object.keys(error).length){
                       
                        notify('درخواست شما با موفقیت انجام شد','success')
                          ////////////////////////////////////////////////////////////////
                       const emails = getEmailFromLS()
                       emails.push(data.email)
                       const uniqEmails = [...new Set(emails)]
                       localStorage.setItem('emails',JSON.stringify(uniqEmails))
                         ////////////////////////////////////////////////////////////////
                       const users =  addUserToLs()
                       users.push(data)
                     
                       localStorage.setItem('user',JSON.stringify(users))
                         ////////////////////////////////////////////////////////////////
                        setTimeout(() => {
                                navi("/success")
                        }, 200);
                }
             
                else{
                     
                        // setUsers([
                        //         ...users,data
                        // ])
                      
                        setFocus({
                                name:true,
                                family:true,
                                email:true,
                                password:true,
                                confirmPassword:true,
                        })
                        setCheckC(true)
                        notify('لطفا موارد خواسته شده را تکمیل کنید !','error')
                }
        }
       
        const addUserToLs =() => {
                  let users;
                  let getFromLS = localStorage.getItem('user')
                  if (getFromLS === null) {
                        users=[]
                  } else {
                        users = JSON.parse(getFromLS)
                  }
                  return users
        }
        const getEmailFromLS = () => {
                let emails;
                let getFromLS = localStorage.getItem('emails')
                if (getFromLS === null) {
                        emails=[]
                } else {
                        emails = JSON.parse(getFromLS)
                }
                return emails
        }
 
        return (
<>
                <div className={styles.formWrapper}>
                        <div id="ScrollHere1" name="ScrollHere1"></div>
                   <form onSubmit={submitHandler} className={styles.forms}>
                           <h1 className={styles.h11}>ثبت نام</h1>
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
                                   <label htmlFor="name">نام خانوادگی </label>
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
                                   <div>
                                   <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onClick={checkBoxHandler} />
                                   <label htmlFor="name">با قوانین سایت موافقم </label>
                                   </div>
                                   {error.isAccepted && checkC && <span>{error.isAccepted}</span>}
                           </div>
                           <div className={styles.sLoWrapper}>
                           <button className={styles.buttonSign}  type= "submit" >ثبت نام</button>
                           <span>
                                    <p> قبلا ثبت نام کردی؟</p>  
                           <Link to="/Login" >ورود</Link> 
                           </span>
                           </div>
                           
                   </form>
                   <ToastContainer  rtl />
                </div>
                

                </>
        );
};

export default SignUp;