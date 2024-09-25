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
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            value={charge}
            onChange={handleCharge}
          ></input>
        </div>
        <div>
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
      <button type="submit">{isEditing ? '수정' : '제출'}</button>
    </form>
  );
};

export default ExpenseForm;
