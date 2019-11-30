import React from 'react';
import styles from "./Loans.module.css"
import {NavLink} from "react-router-dom";

const Loan = (props) => {

    return (

        <NavLink to={'/loans/' + props.id}>

            <div className={styles.loanCard + ' ' + (props.status_id != 10 ? styles.active : "")}>
                <div className={styles.loanCardContent}>
                    <div className={styles.colLeft}>
                        <div>
                            <p><span>Сума займа</span><span className={styles.value}>{props.issue_amount}</span><span>тенге</span>
                            </p>
                            <p><span>Срок Займа</span><span
                                className={styles.value}>{props.issue_term}</span><span>дн.</span></p>
                        </div>
                        <div>
                            <p><span>Сума оплат</span><span className={styles.value}>{props.repaid_amount}</span><span>тенге</span>
                            </p>
                            <p><span>Процентная ставка</span><span className={styles.value}>{props.interest}</span></p>
                        </div>

                    </div>

                    <div className={styles.colRight}>
                        <div>
                            <p><span>Статус займа</span><span className={styles.value}>{props.status_name}</span></p>
                        </div>
                        <div>
                            <p><span >Срок</span><span
                                className={styles.value + ' ' + styles.date}>{props.return_date}</span></p>
                        </div>
                    </div>
                </div>

            </div>

        </NavLink>
    )
}

export default Loan;