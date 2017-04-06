import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';



class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDBNAPxpPFIJnT4C88an-UMMtWy18QFwYc",
            authDomain: "manager-20722.firebaseapp.com",
            databaseURL: "https://manager-20722.firebaseio.com",
            storageBucket: "manager-20722.appspot.com",
            messagingSenderId: "111354476900"
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;