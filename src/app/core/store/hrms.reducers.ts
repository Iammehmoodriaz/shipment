import * as HRMSAction from './hrms.actions';

export interface State {
    menu:any[],
    screens: any[]
}
const initialState: State = {
    menu:null,
    screens: null
};

export function taskReducer(state = initialState, action: HRMSAction.HRMSAction) {
    let replays = action.payload ? action.payload : [];
    switch (action.type) {
        case (HRMSAction.menu):
            return [state, replays];
        default:
            return [state];
    }
}

export function clearState(reducer) {
    return function (state, action) {
        if (action.type === HRMSAction.ActionTypes.LOGOUT) {
            state = undefined;
        }

        return reducer(state, action);
    };
}