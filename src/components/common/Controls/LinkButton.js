import React from "react";
import PropTypes from "prop-types";
import {Route} from 'react-router-dom';
import styles from "./Controls.module.css";

export default class LinkButton extends React.Component {

    render() {
        return (
            <Route render={({history}) => (
                <button className={styles.defaultBtn} {...this.props}
                        onClick={() => {
                            history.push(this.props.to)
                        }}>
                    {this.props.children}
                </button>
            )}/>
        );
    }
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired
};