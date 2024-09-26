import React from 'react';

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  return (
    <li
      className="expense-item"
      style={{
        display: 'flex',
        listStyleType: 'none',
        border: '1px solid lightgray',
        padding: '10px',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span>{expense.charge}</span>
        <span>{expense.amount}원</span>
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => handleEdit(expense.id)}
        >
          수정
        </button>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(expense.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
