import { getRandomFields } from '../../../services/randomFieldsService';

// FETCH ZIPCODES ACTION NAMES

export const ALL_VIEW = 'ALL_VIEW';
export const FETCHING_API = 'FETCHING_API';


// ACTION GENERATORS

export const allViewAction = () => ({
    type: ALL_VIEW,
});

export const storeRandomSelectedFields = (data) => ({
    type: FETCHING_API,
    fields: data.fields,
    items: data.items
});

export const getRandomSelectedFields = () => {
    return (dispatch) => {
        return getRandomFields()
            .then(res => {
                dispatch(storeRandomSelectedFields(res));
            })
            .catch(err => {
                console.log(err);
            });
    };
};