import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    // wrap the App with the Provider and add the store as provider
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root'));







/** Codepen intro to Redux
 * console.clear();

    // Person creating a policy (action creators )
    //=============================================================
    const createPolicy = (name, amount) => {
    return { // Action (the form)
        type: 'CREATE_POLICY',
        payload: {
        name: name,
        amount: amount
        }
    };
    };
    // Person deleting a policy
    const deletePolicy = (name) => {
    return { // Action (the form)
        type: 'DELETE_POLICY',
        payload: {
        name: name
        }
    };
    };
    // Action creator
    const createClaim = (name, amountCollected) => {
    return {
        type: 'CREATE_CLAIM', //Action
        payload: {
        name: name,
        amountCollected: amountCollected
        }
    }
    };
    // Dispatch is integrated in the Redux library

    //Reducers
    //===============================================
    const claimsHistory = (oldClaimsList = [], action) => {
    // if person create a claim AND has policy
    if ( (action.type === 'CREATE_CLAIM') && (policies.name.indexOf(action.payload.name) != -1) ){
        // take action
        return [...oldClaimsList, action.payload]; // unline push() which modifies old array, ... creates new array
    }
    
    // No action
    return oldClaimsList;
    };

    const accounting = (bagOfMoney = 100, action) => {
    // if person create a claim AND has policy NOT WORKING :(
    if ((action.type === 'CREATE_CLAIM') && (policies.name.indexOf(action.payload.name) != -1)) {
        return bagOfMoney - action.payload.amountCollected;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    }
    return bagOfMoney;
    };

    const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        // filter() creates a new array removes the entry that satisfies the callback
        return listOfPolicies.filter(name => name != action.payload.name);
    }
    return listOfPolicies;
    };

    const { createStore, combineReducers } = Redux;

    const ourDepartments = combineReducers({
    claimsHistory: claimsHistory,
    accounting: accounting,
    policies: policies 
    });

    const store = createStore(ourDepartments);

    //const action = createPolicy('Alex', 20);

    store.dispatch(createPolicy('Alex', 20)); // accounting 120
    store.dispatch(createPolicy('Jane', 90)); // accounting 210
    store.dispatch(createPolicy('Jim', 100)); // accouting 310

    store.dispatch(createClaim('bob', 70)); //  accouting 310
    store.dispatch(createClaim('Jim', 70));

    console.log(store.getState());
 */