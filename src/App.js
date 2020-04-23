import React from 'react';
import './App.css';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { addExpense } from './actions/expenses';
import getVisibilexpenses from './selectors/expenses';

const store = configureStore();


console.log(store.getState());

store.dispatch(addExpense({description:"rent",
  amount:2000,
  createdAt:1200}));

store.dispatch(addExpense({description:"water bill",
amount:5000,
createdAt:1000}))

store.dispatch(addExpense({description:"gas bill",
amount:1000,
createdAt:2000}))

// store.dispatch(setTextFilter('bill'))


const state = store.getState();
const visibleExpenses = getVisibilexpenses(state.expenses, state.filters);
console.log(visibleExpenses);
  console.log(store.getState());



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
      
    );
  }
}


export default App;
