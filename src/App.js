import React, {Component} from 'react';
import style from './App.module.css';
import Login from "./components/Login/Login";
import {HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoansContainer from "./components/Loans/LoansContainer";
import LinkButton from "./components/common/Controls/LinkButton";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        function handleClick(e) {
            e.preventDefault();
            alert('click');
        }

        return (
            <React.Fragment>
                <HeaderContainer/>

                <div className={style.content}>
                    <Route exact path='/' render={
                        () => <LinkButton to="/loans">Посмотреть список займов</LinkButton>
                    }/>

                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/loans/:id?' render={() => <LoansContainer/>}/>
                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const TestApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}


export default TestApp;
