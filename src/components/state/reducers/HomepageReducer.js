import {
    ALL_VIEW,
    FETCHING_API
} from '../actions/HomepageActions';

import { suggestions } from '../../../services/randomFieldsService';


// INITIALIZE STATE

const initialState = {
    textField: false,
    checkbox: false,
    radioBox: false,
    emailField: false,
    numberField: false,
    selectField: false,
    multiSelectField: false,
    textAreaField: false,
    fileUploadField: false,
    allFields: false,
    selectedItems: suggestions
};


// REDUCER

export const HomepageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_VIEW:
            if(!state.allFields) {
                return {
                    ...initialState,
                    textField: true,
                    checkbox: true,
                    radioBox: true,
                    emailField: true,
                    numberField: true,
                    selectField: true,
                    multiSelectField: true,
                    textAreaField: true,
                    fileUploadField: true,
                    allFields: true,
                };
            } else {
                return {
                    ...initialState
                };
            }

        case FETCHING_API:
            return {
                ...initialState,
                ...action.fields,
                selectedItems: action.items
            };
        default:
            return state;
    }
};