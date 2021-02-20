import React, { Component } from "react";
import './App.scss';
import CustomForm from './components/CustomFormPage';
import SimpleForm from './components/FormikFormPage';
import TextInput from './components/TextInput';

class App extends Component {
    render() {
        return (
            (!<SimpleForm />) ? <CustomForm /> : <TextInput /> && <SimpleForm /> || <h1 style={{textAlign: 'center'}}>404 Page not found</h1>
        )
    }
}

export default App;