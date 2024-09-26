import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, handleEdit, handleDelete }) => {
  return (
    <>
      <ul
        className="list"
        style={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button style={{ cursor: 'pointer' }}>목록 지우기</button>
      </div>
    </>
  );
};

export default ExpenseList;
