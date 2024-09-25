import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <main className="main-container">
      <h1>예산 계산기</h1>

      <ExpenseForm />

      <ExpenseList />

      <div>
        <p>
          총 지출:
          <span>원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
