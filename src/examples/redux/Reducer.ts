import ActionTypes from './ActionTypes';
const defaultState = {
    count: 0
};

// 常规书写方式
export default function countReducer(state: any = defaultState, action: any) {
    const { caption = '', count = 0 } = action && action.payload || {}
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state;
        case ActionTypes.DECREMENT:
            return { ...state, [caption]: (state[caption] || 0) + count }
        default:
            return state;
    }
}

// 借助 redux-actions 写法
/* import { handleActions, combineActions } from 'redux-actions';
export default handleActions({
    [combineActions(ActionTypes.INCREMENT, ActionTypes.DECREMENT)](state: any, {payload: { caption, count } }: any){
        return { ...state, [caption]: (state[caption] || 0) + count }
    }
}, defaultState); */