import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  // Marcar uma tarefa como concluída
  const marcarComoConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  // Remover uma tarefa
  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>

      {/* Input para nova tarefa */}
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      {/* Lista de Tarefas */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className={tarefa.concluida ? 'concluida' : ''}>
            <span onClick={() => marcarComoConcluida(index)}>{tarefa.texto}</span>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
