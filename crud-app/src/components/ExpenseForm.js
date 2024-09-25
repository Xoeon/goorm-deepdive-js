import React from 'react';

const ExpenseForm = () => {
  const handleSubmit = () => console.log('submit');

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
          ></input>
        </div>
        <div>
          <label htmlFor="charge">비용</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
          ></input>
        </div>
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default ExpenseForm;
