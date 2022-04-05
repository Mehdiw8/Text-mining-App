import React,{useState,useEffect} from 'react';
import '../../CSSFile/Changepro.css';
import {validate} from '../../SignUp/Validation';
import styles from '../../CSSFile/SignUp.module.css';
import {notify} from  '../../helperJs/reactTostify'
import { ToastContainer } from 'react-toastify';
const Changeprofile = ({userLSd}) => {
    const {name,family,email,password} = userLSd
    const[error,setErrors] = useState({})
    const [focus,setFocus] = useState({})
    const [data,setData] = useState({
        name:name,
        family:family,
        email:email,
        password:password
       
    })

    useEffect(() =>{
        setErrors(validate(data))
    },[data,focus])

    const changeHandler = (e) =>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
        console.log(data)
    }
    const focusHandler= (e)=>{
        e.preventDefault();
        setFocus({
                ...focus,[e.target.name]:true
        })
}
const submitHandler =(e)=>{
    e.preventDefault()
    if(!Object.keys(error).length){
            notify('تغییرات با موفقیت اعمال شد','info')   
            const newUSerDetail = { 
                confirmPassword: userLSd.confirmPassword,
                email: data.email,
                family: data.family,
                isAccepted: true,
                name: data.name,
                password: userLSd.password,
      }
         console.log(newUSerDetail);
            //localStorage.setItem('userDetail',JSON.stringify(newUSerDetail))
            const users =  addUserToLs()
            users.push(newUSerDetail)
          
            localStorage.setItem('user',JSON.stringify(users))
            console.log(users)
           
    }
 
    else{
        console.log('first')
            setFocus({
                    name:true,
                    family:true,
                    email:true,
            })
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
  
        return (
                <div className="parent-all-parent-edit">

                <div className="user-edit-informations">
                    <h3>ویرایش مشخصات</h3>
                
                    <form className="user-edit-informations-content" onSubmit={submitHandler} >
                        <div className="name placeFix">
                            <fieldset>
                                <legend>
                                    <span>نام</span>
                                </legend>
                                <input 
                                 onChange={changeHandler} name="name" type="text" onFocus={focusHandler} value={data.name} required/>
                            </fieldset>
                           
                
                            <fieldset>
                                <legend> <span>نام خانوادگی</span> </legend>
                                <input 
                                 onChange={changeHandler} name="family" type="text" onFocus={focusHandler} value={data.family} required/>
                            </fieldset>
                          
                
                        </div>
                      
                        <div className="contact-informmation placeFix">
                           
                
                            <fieldset>
                                <legend> <span>ایمیل</span> </legend>
                                <input 
                                 onChange={changeHandler} name="email" type="email" onFocus={focusHandler} value={data.email} required />
                            </fieldset>
                            
                        </div>
                        <button type="submit">ثبت</button>
                    </form>
                </div>
                <ToastContainer rtl />
                </div>
        );
};

export default Changeprofile;