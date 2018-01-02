import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, StatusBar

} from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/Main'
import store from './redux/store'
export default class extends Component {
    componentDidMount() {
        StatusBar.setHidden(true)
    }
    render(


    ) {
        return (

            <Provider store={store}>
                <Main />
            </Provider>

        );
    }
}
