import React from 'react';
import Loan from "./Loan";
import styles from "./Loans.module.css"
import dateFormat from '../../utils/dateformat';

const Loans = ({loans, isAuth}) => {

    return (
        <div className={styles.loansList}>
            {
                [...loans].reverse().map(l => <Loan key={l.number}
                                                    id={l.number}
                                                    status={l.status}
                                                    status_id={l.status_id}
                                                    status_name={l.status_name}
                                                    repaid_amount={l.repaid_amount}
                                                    overdue_days={l.overdue_days}
                                                    issue_amount={l.issue_amount}
                                                    issue_term={l.issue_term}
                                                    interest={l.interest}
                                                    return_date={dateFormat(new Date(l.return_date), "d mmmm yyyy")}

                    />
                )
            }
        </div>
    )
}

export default Loans;


