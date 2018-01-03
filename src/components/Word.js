import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity, Button,
} from 'react-native';
import { connect } from 'react-redux';
import{toogleMemorized, toggleShow } from '../redux/actionCreators';

class Word extends Component {

    // memorizedWord=()=>{
    //     this.props.dispatch({
    //         type:'TOGGLE_MEMORIZED',
    //         id: this.props.myWord.id
    //     });
    // }

    // toggleShowWord=()=>{
    //     this.props.dispatch({
    //         type:'TOGGLE_SHOW',
    //         id: this.props.myWord.id
    //     });
    // }
    render() {
        const { en, vn,memorized, isShow, id } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' :'none';
        const memorizedButtonText = memorized ?'forget':'memorized';
        const meaning = isShow?vn: '---';
        const buttonShow = isShow? 'UnShow':'Show';
        return (

            <View style={styles.container}>
                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={styles.controller}> 

                    <TouchableOpacity style={styles.button} onPress={()=>this.props.toogleMemorized(id)}>
                        <Text style={{ color: 'silver'}}>{memorizedButtonText}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>this.props.toggleShow(id)}>
                        <Text style={{ color: 'silver'}}>{buttonShow}</Text>
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
export default connect(null, {toogleMemorized, toggleShow})(Word);