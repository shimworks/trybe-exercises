import './App.css';

const lista = ['Tarefa1', 'Tarefa2', 'Lavar louça']

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {lista.map((elm) => <li>{elm}</li>)}
        </ol>
      </header>
    </div>
  );
}

export default App;
