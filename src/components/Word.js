import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity, Button,
} from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {

    memorizedWord=()=>{
        this.props.dispatch({
            type:'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        });
    }
    render() {
        const { en, vn,memorized } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' :'none';
        const memorizedButtonText = memorized ?'forget':'memorized';
        return (

            <View style={styles.container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{vn}</Text>
                <View style={styles.controller}> 

                    <TouchableOpacity style={styles.button} onPress={this.memorizedWord}>
                        <Text style={{ color: 'silver'}}>{memorizedButtonText}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'silver'}}>Show</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10,
        borderRadius:5
    },
    controller:{
        flexDirection:'row',
        justifyContent: 'space-around',
       
        
        
    },
    button:{
        backgroundColor: 'green',
        padding: 4,
        marginTop: 4, borderRadius:5,
    }
});
export default connect()(Word);