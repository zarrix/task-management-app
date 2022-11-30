import Component from '../components/Component';
import Header from '../components/Header';
import Todos from '../components/Todos';

function App() {
  const t = 5;
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Todos */}
      <Todos />
      {/* <Component /> */}
      
    </div>
  );
}

export default App;
