import React from 'react';
import Loans from "./Loans";
import {connect} from "react-redux";
import {compose} from "redux";
import {requestLoanDetails, requestLoans} from "../../redux/loans-reducer";
import {withRouter} from "react-router-dom";
import LoanDetails from "./LoanDetails";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import dateFormat from '../../utils/dateformat';
import Preloader from "../common/Preloader/Preloader";

class LoansContainer extends React.Component {

    LoanDetails() {
        const id = this.props.match.params.id;
        const {token} = this.props;
        this.props.getLoanDetails(token, id);
    }

    Loans() {
        const {token} = this.props;
        this.props.getLoans(token);
    }

    componentDidMount() {
        if (!this.props.match.params.id) {
            this.Loans();
        } else {
            this.LoanDetails();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id != prevProps.match.params.id) {
            if (!this.props.match.params.id) {
                this.Loans();
            } else {
                this.LoanDetails();
            }
        }
    }

    render() {
        return <React.Fragment>
            { this.props.match.params.id && this.props.loan ? (
                this.props.isFetching ?
                    <Preloader /> : <LoanDetails {...this.props.loan}
                                                 issue_date={dateFormat(new Date(this.props.loan.issue_date), "d mmmm yyyy")}
                                                 return_date={dateFormat(new Date(this.props.loan.return_date), "d mmmm yyyy")}/>
            ) :
                this.props.isFetching ? <Preloader /> : <Loans loans={this.props.loans}/>
            }
        </React.Fragment>
    }
}

let mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        loans: state.loansPage.loans,
        loan: state.loansPage.loan,
        isFetching: state.loansPage.isFetching,
    }
}

export default compose(
    connect(mapStateToProps, {getLoans: requestLoans, getLoanDetails: requestLoanDetails}),
    withRouter,
    withAuthRedirect
)(LoansContainer)