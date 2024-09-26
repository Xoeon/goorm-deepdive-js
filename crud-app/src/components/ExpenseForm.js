import React from 'react';

const ExpenseForm = ({
  charge,
  amount,
  isEditing,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '15px',
          marginBottom: '10px',
        }}
      >
        <div className="basic-form">
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. 렌트비"
            value={charge}
            onChange={handleCharge}
          ></input>
        </div>
        <div className="basic-form">
          <label htmlFor="charge">비용</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
            value={amount}
            onChange={handleAmount}
          ></input>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button type="submit" style={{ cursor: 'pointer' }}>
          {isEditing ? '수정' : '제출'}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
