import React, { Component } from 'react';
import {
    Text, Touchable, FlatList, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Word from './Word'
import Filter from './Filter'
import Header from './Header'
import Form from './Form'
class Main extends Component {
    getWordlist(){
        const {myFilter, myWords} =this.props;
        //if(myFilter=== 'SHOW_ALL') return myWords;
        if(myFilter=== 'MEMORIZED') return myWords.filter(e =>e.memorized);
        if(myFilter=== 'NEED_PRACTICE') return myWords.filter(e =>!e.memorized);
        

        return myWords;
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'mediumseagreen',
                    alignSelf: 'stretch'

                }}>   
                <Header />
               
                <View style={{flex:9, }}> 
                   
                {this.props.myIsAdding? <Form />:null}
                    <FlatList
                        data={this.getWordlist()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
               <Filter />


            </View>
        );
    }
}


function mapStatetoProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,
    }
}
export default connect(mapStatetoProps)(Main);