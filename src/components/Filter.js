import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {showAll, showMemorized,showNeedPractice } from '../redux/actionCreators'
class Filter extends Component {
    getTextStyle(statusName) {
        //const{myFilterStatus}=this.props
        if (statusName === this.props.myFilterStatus)
            return {
                color: 'yellow', fontWeight: 'bold'
            };
        return
        styles.buttonText

    }
    setFilterStatus(actionType){
        this.props.dispatch({
            type:actionType
        });
    }
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={()=>this.props.showAll()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.showMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.showNeedPractice()}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583c3c', flex: 1, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around'
    },
    buttonText: { color: 'white' }

})
function mapStateToProps(state) {
    return {
        myFilterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps,{showAll,showMemorized,showNeedPractice})(Filter);