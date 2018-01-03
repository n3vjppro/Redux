import { createStore, combineReducers } from 'redux';
import reducer from './reducer/reducer'

//default state




//reducer, action

// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'FILTER_SHOW_ALL':
//             return { ...state, filterStatus: 'SHOW_ALL' }
//         case 'FILTER_MEMORIZED':
//             return { ...state, filterStatus: 'MEMORIZED' }
//         case 'FILTER_NEED_PRACTICE':
//             return { ...state, filterStatus: 'NEED_PRACTICE' }
//         case 'TOGGLE_MEMORIZED':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id !== action.id) return e;
//                     return { ...e, memorized: !e.memorized }
//                 })
//             }
//         case 'TOGGLE_IS_ADDING':
//             return {
//                 ...state,
//                 isAdding: !state.isAdding
//             }
//         case 'ADD_WORD':
//             return {
//                 ...state,
//                 arrWords: [{
//                     id: state.arrWords.length + 1,
//                     en: action.en,
//                     vn: action.vn,
//                     memorized: false,
//                     isShow: false
//                 }].concat(state.arrWords)
//             };
//         case 'TOGGLE_SHOW':
//             return {
//                 ...state,
//                 arrWords: state.arrWords.map(e => {
//                     if (e.id !== action.id) return e;
//                     return { ...e, isShow: !e.isShow }
//                 })
//             }


//         default: break;

//     }

//     return state;

// };

//Combine reducers





// const reducer = combineReducers({
// arrWords:arrWordsReducer,
// filterStatus:filterStatusReducer,
// isAdding:isAddingReducer,

// })
//create Strore

const  store = createStore(reducer);

 //provider ->1  component, 1 props->store

export default store;