import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from '../common/FieldControl/FieldControl'
import {maxLengthCreator, required} from "../../utilits/validation/validation";
import {connect} from 'react-redux';
import {logIn} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../common/FieldControl/FieldControl.module.css";

const Login = (props) => {

    const onSubmitt = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm capchaId={props.capchaId} onSubmit={onSubmitt}/>
    </div>
}
const maxLength50 = maxLengthCreator(50)
const LoginForm = ({handleSubmit, error, capchaId}) => {
    debugger;
    return <form onSubmit={handleSubmit}>
            {createField(Input,[required, maxLength50], 'email', "Email" )}
            {createField(Input,[required, maxLength50], 'password', "Password", {type: 'password'} )}
            {createField(Input,[], 'remember', "", {type: 'checkbox'}, 'Remember me' )}
        { error && <div className={style.formSummaryError}>{error}</div>}
        { error === "Incorrect anti-bot symbols" && <div className={style.formCapchaError}>
            <div><img src={capchaId} alt='capcha' /></div>
            <div>
                "Field component={Input} validate={[required, maxLength50]} name={'capcha'} placeholder={"Enter Capcha"}"
            </div>

        </div>}
        <div>
            <button>Log In</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    capchaId: state.auth.capchaId
})

export default connect(mapStateToProps, {logIn}) (Login)