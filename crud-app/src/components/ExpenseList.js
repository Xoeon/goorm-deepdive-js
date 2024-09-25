import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, handleEdit, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button>목록 지우기</button>
    </>
  );
};

export default ExpenseList;
