import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../common/Controls/Controls";
import LinkButton from "../common/Controls/LinkButton";

const Header = (props) => {

    return <header className={styles.header}>
        <NavLink to={'/'}>
            <img className={styles.logo} src='https://dengiclick.kz/sites/all/themes/dclick/images/logo.png'/>
        </NavLink>

        <div>
            { props.isAuth
                ? <Button onClick={props.logout}>Выйти</Button>
                : <LinkButton to="/login">Личный кабинет</LinkButton>
            }
        </div>

    </header>
}

export default Header;