import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const t = 5;
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Todos */}
      <Todos />
      
    </div>
  );
}

export default App;
