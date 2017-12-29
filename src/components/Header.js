import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity,
} from 'react-native'; 
import {connect} from 'react-redux';

 class Header extends Component {
    
//      ButtonAdd() { 
//          this.props.dispatch({type: 'TOGGLE_IS_ADDING'});
//          return this.props.myIsAdding?'-':'+'
//  }
    render() {
   
        
        return (
            <View style={styles.header}>
            <Text></Text>
            <Text>My Words</Text>
            
            <TouchableOpacity onPress={()=>this.props.dispatch({type: 'TOGGLE_IS_ADDING'})}>
                <Text>{this.props.myIsAdding?'-':'+'} </Text>
            </TouchableOpacity>
        </View>
        );
    }
};
const styles = StyleSheet.create({
    header:{
        flex:1, backgroundColor:'red', alignItems:'center',justifyContent:'space-between'
    ,flexDirection : 'row'
    ,paddingHorizontal:20,
    }
},


);

function mapStatetoProps(state) {
    return {
        
        myIsAdding: state.isAdding,
    }
}

export default connect(mapStatetoProps)(Header)