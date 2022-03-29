import React from 'react';
import '../../CSSFile/Changepro.css';
const Changeprofile = () => {
        return (
                <div className="parent-all-parent-edit">

                <div className="user-edit-informations">
                    <h3>ویرایش مشخصات</h3>
                
                    <form className="user-edit-informations-content">
                        <div className="name placeFix">
                            <fieldset>
                                <legend>
                                    <span>نام</span>
                                </legend>
                                <input type="text" value="مهدی" required/>
                            </fieldset>
                
                            <fieldset>
                                <legend> <span>نام خانوادگی</span> </legend>
                                <input type="text" value="میرزایی" required/>
                            </fieldset>
                
                        </div>
                        <div className="gender-select">
                            <fieldset>
                                <legend> <span>جنسیت</span> </legend>
                                <select name="gender" id="sel-gender" required>
                                    <option value="">انتخاب کنید</option>
                                    <option value="male">&nbsp;&nbsp;&nbsp; آقا</option>
                                    <option value="female">&nbsp;&nbsp;&nbsp; خانم </option>
                                </select>
                            </fieldset>
                        </div>
                        <div className="contact-informmation placeFix">
                            <fieldset>
                                <legend> <span>شماره تماس</span> </legend>
                                <input type="number" value="09171111111" required />
                            </fieldset>
                
                            <fieldset>
                                <legend> <span>ایمیل</span> </legend>
                                <input type="email" value="aeeq18@gmail.com" required />
                            </fieldset>
                        </div>
                        <button type="submit">ثبت</button>
                    </form>
                </div>
                </div>
        );
};

export default Changeprofile;