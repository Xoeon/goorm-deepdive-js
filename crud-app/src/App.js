import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1000 },
    { id: 2, charge: '교통비', amount: 2000 },
    { id: 3, charge: '식비', amount: 3000 },
  ]);

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState('');

  const handleCharge = (e) => setCharge(e.target.value);

  const handleAmount = (e) => setAmount(e.target.valueAsNumber);

  const handleEdit = (id) => {
    const selectedExpense = expenses.find((expense) => expense.id === id);
    const { charge, amount } = selectedExpense;

    setCharge(charge);
    setAmount(amount);
    setIsEditing(true);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== '' && amount > 0) {
      if (isEditing) {
        const editedExpenses = expenses.map((expense) => {
          return expense.id === editingId
            ? { ...expense, charge, amount }
            : expense;
        });
        setExpenses(editedExpenses);
        setIsEditing(false);
      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount,
        };

        setExpenses([...expenses, newExpense]);
      }
      setCharge('');
      setAmount(0);
    } else {
      console.log('error');
    }
  };

  return (
    <main className="main-container">
      <h1 style={{ width: '100%', textAlign: 'center' }}>예산 계산기</h1>

      <div className="expense-form">
        <ExpenseForm
          charge={charge}
          amount={amount}
          isEditing={isEditing}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className="expense-list">
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      <div className="total-amount">
        <p>
          총 지출:
          <span>
            {expenses.reduce((acc, curr) => (acc += curr.amount), 0)}원
          </span>
        </p>
      </div>
    </main>
  );
}

export default App;
