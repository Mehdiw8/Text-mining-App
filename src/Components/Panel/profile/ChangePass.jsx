import React , {useState} from 'react';
import '../../CSSFile/Changepass.css';
const ChangePass = ({userLSd}) => {
    const [passwords,setPasswords] = useState({
        oldpass:'',
        newpass:'',
        newpassCheck:''
    }); 
    const changeHandler =(e)=>{
        setPasswords({
            ...passwords , [e.target.name]:e.target.value
      })
    }
    const submitHandler =(e)=>{
        e.preventDefault()
    }
        return (
                <>
                         <div className="changepass">
                         <div className="changepass changepass-2">
                            <h3>در صورتی که تمایل دارید رمز عبور خود تغییر دهید، لطفا </h3>
                            <h3>رمز عبور جدید را وارد کنید</h3>
                            <form className="changepass-form" onSubmit={submitHandler} >
                                <input type="password" name="oldpass" onChange={changeHandler} value={passwords.oldpass} placeholder="رمز عبور قبلی" required />
                                <input type="password" name="newpass" onChange={changeHandler} value={passwords.newpass} placeholder="رمز عبور جدید" required />
                                <input type="password" name="newpassCheck" onChange={changeHandler} value={passwords.newpassCheck} placeholder="تکرار رمز عبور" required />
                                <button type="submit">اعمال تغییرات</button>
                            </form>

                        </div>
                    </div>

                </>
        );
};

export default ChangePass;