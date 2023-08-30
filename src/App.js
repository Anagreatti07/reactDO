import { useEffect, useState } from "react";


function App() {

  const[ listaTarefas, setListaTarefas] = useState([]);
  const[tarefa, setTarefa] = useState({id:'', texto:"", status:""});

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

  function statusTarefa(id, status)
  {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id);
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas]);
  }

  useEffect(()=>{
    setTarefa({id:"", texto:"", status:""});
  },[ listaTarefas])

  return (
    <>
      <header>
          <h2 className="info1">Compromissos do dia:</h2>
      </header>
      
      <div className="tarefas">
      <div >
          <input maxLength={60} className="tamanhoescrever" type="text" name="tarefa" placeholder="Digite seu compromisso..." value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status:false})}/>
          <button className="tamanhoescrever2" onClick={addTarefa}>Add</button>
      </div>
      <div className="box">
          <ul>
            {listaTarefas.map((item, index) => (
              <li className="item" key={item.id}> <button className="btnteste" onClick={() => statusTarefa(item.id, item.status)}>{item.status ? '✔️': 'ㅤ'}</button> <div className={item.status ? "testeRiscado" : "teste" }>{item.texto}</div>  <button className="btnteste" onClick={() => excluirTarefa(item.id)}>✖️</button> </li>
            ))}
          </ul>
          
      </div>
      
      </div>

      <div>
          <textarea className="textodia" name="" id="caixa" cols="100" rows="10" placeholder="Como foi o seu dia..." ></textarea>
      </div>
      
    
    </>
  );
}

export default App;
