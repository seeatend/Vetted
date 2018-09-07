// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { HomepageReducer } from '../reducers/HomepageReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    homepage: HomepageReducer
});