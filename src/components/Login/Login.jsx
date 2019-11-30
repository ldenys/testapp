import React from 'react';
import {reduxForm} from "redux-form";
import style from "./../common/FormsControls/FormsControls.module.css"
import {connect} from "react-redux";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css';
import {Button} from "../common/Controls/Controls";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField("Введите телефон", "username", [required], Input)}
            {createField("Введите пароль", "password", [required], Input, {type: "password"})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <Button>Вход</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.username, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={"/loans"}/>
    }

    return <div className={styles.login}>
        <h1>Вход в личный кабинет</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);