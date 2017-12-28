import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity, TextInput,
} from 'react-native';
import { connect } from 'react-redux';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
    }
    onAdd =()=>{
        const{en,vn} = this.state;
        this.props.dispatch({
            type: 'ADD_WORD',
            en,
            vn

        });
        this.props.dispatch({type: 'TOGGLE_IS_ADDING'})

    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textinput}
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="English"
                >

                </TextInput>
                <TextInput
                    style={styles.textinput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                >
                </TextInput>


                <TouchableOpacity onPress={this.onAdd}>

                    <Text>Add</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default connect()(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinput: {
        height: 40,
        width: '95%',

        backgroundColor: 'yellow',
        margin: 10,
        paddingHorizontal: 10,
    }
})