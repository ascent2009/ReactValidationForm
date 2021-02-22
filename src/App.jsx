import React, { Component } from "react";
import './App.scss';
import { Route, Router, Switch } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import CustomForm from './components/CustomFormPage';
import SimpleForm from './components/FormikFormPage';

class App extends Component {
    render() {
        return (
            <>
                <HeaderMenu />
                <Switch>
                    <Route exact path="/" component={CustomForm} />
                    <Route exact path="/custom" component={CustomForm} />
                    <Route path="/formik" component={SimpleForm} />
                </Switch>
            </>
        )
    }
}

export default App;