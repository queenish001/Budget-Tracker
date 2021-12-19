import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":1249,"category":"Shopping","type":"Expense","date":"2021-12-24","id":"2e465514-2a9a-4abd-b43c-66ad6115e183"},
{"amount":650,"category":"Travel","type":"Expense","date":"2021-12-22","id":"b2c9771c-691b-4d54-a5ea-dd4859a67fb2"},{"amount":12000,"category":"Stocks","type":"Income","date":"2021-12-21","id":"a3fd1838-bf3e-4795-95cf-fede5e8ff1ff"},
{"amount":3500,"category":"Business","type":"Income","date":"2021-12-20","id":"0859a723-df7c-4a6b-96dc-704fa115cb3e"}] ;

export const ExpenseTrackerContext = createContext(contextReducer, initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) => dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce((acc, currVal) => {
    return (currVal.type === "Income" ? acc + currVal.amount : acc - currVal.amount);
  }, 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction, 
      addTransaction,
      transactions,
      balance
      }} >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
