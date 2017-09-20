import ActionTypes from './actionTypes';
export const getChannel = (url: string) => {
    return (dispatch: any, getState: any) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: ActionTypes.FETCH_CHANNEL_SUCCESS, payload: data.result.result });
            })
            .catch(err => {
                dispatch({ type: ActionTypes.FETCH_CHANNEL_FAILED, payload: err });
            });
    };
};