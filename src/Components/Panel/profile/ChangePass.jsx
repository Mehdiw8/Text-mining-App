import React from 'react';
import '../../CSSFile/Changepass.css';
const ChangePass = () => {
        return (
                <>
                         <div className="changepass">
                         <div className="changepass changepass-2">
                            <h3>در صورتی که تمایل دارید رمز عبور خود تغییر دهید، لطفا </h3>
                            <h3>رمز عبور جدید را وارد کنید</h3>
                            <form className="changepass-form">
                                <input type="password" placeholder="رمز عبور قبلی" required />
                                <input type="password" placeholder="رمز عبور جدید" required />
                                <input type="password" placeholder="تکرار رمز عبور" required />
                                <button type="submit">اعمال تغییرات</button>
                            </form>

                        </div>
                    </div>

                </>
        );
};

export default ChangePass;