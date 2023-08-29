import { useEffect, useState } from "react";

function App() {

  const[ listaTarefas, setListaTarefas] = useState([]);
  const[tarefa, setTarefa] = useState({id:'', texto:""});

  function addTarefa()
  {
    if(tarefa.texto !==""){
    setListaTarefas([...listaTarefas, tarefa]);
    }

  }

  function excluirTarefa(id)
  {
    const novaLista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(novaLista);
  }

  useEffect(()=>{
    setTarefa({id:"", texto:""});
  },[ listaTarefas])

  return (
    <>
      <header>
          <h1>React Do</h1>
      </header>
      <div>
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value})}/>
          <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
          <ul>
            {listaTarefas.map((item, index) => (
              <li key={item.id}>{item.texto} <button onClick={() => excluirTarefa(item.id)}>Excluir</button> </li>
            ))}
          </ul>
      </div>
    
    </>
  );
}

export default App;
