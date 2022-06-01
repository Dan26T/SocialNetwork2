import React from 'react';
import styles from './FieldControl.module.css';
import {Field} from "redux-form";


const FormControl = ({input, meta, child,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
    </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child,  ...restProps} = props;
    return (
        <FormControl {...props}><textarea{...input} {...restProps}/></FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, child,  ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )

}

export const createField = (component, validators, name, placeholder, props = {}, text = '' ) => {
    return <div>
        <Field component={component} validate={validators}
               name={name} placeholder={placeholder}
               {...props}
        />
        {text}
    </div>
}