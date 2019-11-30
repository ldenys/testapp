import React from 'react';
import styles from "./Loans.module.css"

const LoanDetails = (props) => {

    return (
        <div className={styles.loansList}>
            <div
                className={styles.loanCard + ' ' + (props.status_id != 10 ? styles.active : "") + ' ' + styles.details}>
                <div className={styles.loanCardContent}>
                    <div className={styles.colLeft}>
                        <div>
                            <p><span>Номер заявки</span><span className={styles.value}>{props.number}</span></p>
                            <p><span>Срок Займа</span><span
                                className={styles.value}>{props.issue_term}</span><span>дн.</span></p>
                        </div>
                        <div>
                            <p><span>От</span><span
                                className={styles.value + ' ' + styles.date}>{props.issue_date}</span></p>
                            <p><span>до</span><span
                                className={styles.value + ' ' + styles.date}>{props.return_date}</span></p>
                        </div>
                        <div>
                            <p><span>Дней просрочки</span><span className={styles.value}>{props.overdue_days}</span></p>
                        </div>
                        <div>
                            <p><span>Процентная ставка</span><span className={styles.value}>{props.interest}</span></p>
                        </div>
                        <div>
                            <p><span>Сума займа</span><span className={styles.value}>{props.issue_amount}</span><span>тенге</span>
                            </p>
                        </div>
                        <div>
                            <p><span>Сума оплат</span><span className={styles.value}>{props.repaid_amount}</span><span>тенге</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.colRight}>
                        <div>
                            <p><span className={styles.value}>{props.status_name}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetails;