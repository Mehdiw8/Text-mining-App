export const validate = (data) =>{
        const errors = {}

        if(!data.name.trim()){
                errors.name = "نام خود را وارد کنید"
        }else{
                delete errors.name
        }
        if(!data.family.trim()){
                errors.family = "نام خانوادگی خود را وارد کنید"
        }
        else{
                delete errors.family
        }
        if(!data.email){
                errors.email = "ایمیل خود را وارد کنید"
        }
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)){
                errors.email="ایمیل خود را به درستی وارد کنید"
        }
        else{
                delete errors.email
        }
        if(!data.password){
                errors.password="رمز خود را وارد کنید"
        }else if(data.password.length < 6){
                errors.password='رمز شما باید بیشتر از 6 رقم باشد'
        }else{
                delete errors.password
        }
        if(!data.confirmPassword){
                errors.confirmPassword="رمز خود را وارد کنید"
        }
        else if(data.confirmPassword !== data.password){
                errors.confirmPassword="عدم مطابقت رمز"
        }else{
               delete  errors.confirmPassword
        }
        if(data.isAccepted){
           delete errors.isAccepted
        }
        else{
                errors.isAccepted="علامت بزنید"
        }
        return errors
}