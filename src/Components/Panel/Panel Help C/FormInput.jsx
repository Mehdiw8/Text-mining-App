import React from 'react';
import {useStyles} from '../Panel.Style/Page.style'
const FormInput = (props) => {
        const classes = useStyles()
        return (
               
        <form className={classes.formWrapper2} noValidate autoComplete="off" >
                  <label className={classes.formLabel} htmlFor="formInput2"> {props.label}</label>
                  {props.children}
        </form>
               
        );
};

export default FormInput;