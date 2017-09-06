import ActionTypes from './ActionTypes';

// 常规书写方式
const increment = (payload: any) => {
  return {
    type: ActionTypes.INCREMENT,
    payload
  };
};

const decrement = ({ caption, count }: any) => {
  return {
    type: ActionTypes.DECREMENT,
    payload: { caption, count: -count }
  };
};

export default {
    increment, 
    decrement
}; 

// 借助 redux-actions 写法
/* import { createActions } from 'redux-actions';
export default createActions({
    [ActionTypes.INCREMENT]: (payload: any) => payload,
    [ActionTypes.DECREMENT]: ({ caption, count }: any) => {
        return { caption, count: -count }
    }
}); */