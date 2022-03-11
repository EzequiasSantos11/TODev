import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import api from "../../api";
import Styles from "./edit.module.scss";

export default function CreateDo({closeCreate}){
  const [list, setList] = useState({
    title: "",
    deadline: "",
    description: ""
  });

  const handleInputTitle = e => setList({...list, title: e.currentTarget.value});
  const handleInputDeadline = e => setList({...list, deadline: e.currentTarget.value});
  const handleInputDescription = e => setList({...list, description: e.currentTarget.value});
  
  //Salvando na API/Back-end.
  const handleSave = ()=>{
    if(list.title !== "" && list.deadline !== "" && list.description !== ""){
      api.post(`createdo`,{
        title: list.title,
        deadline: list.deadline,
        description: list.description
      }).then(response =>{
        alert("criado com sucesso");
      })
    }else{
      alert("preencha os campos corretamente!");
    }
  }
  
  return(
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Crie uma nova tarefa</h3>
        <div className={Styles.editArea}>
          <div className={Styles.inputArea}>
            <label>Criar um título:</label>
            <input
              type="text" 
              name="title" 
              id="title" 
              onChange={handleInputTitle}
            />
          </div>
          <div className={Styles.inputArea}>
            <label htmlFor="">Definir uma data final:</label>
            <input type="date" name="date" onChange={handleInputDeadline}/>
          </div>
          <div className={Styles.inputArea}>
            <label htmlFor="">Descrição:</label>
            <textarea name="description" id={Styles.description}
              onChange={handleInputDescription} cols="10" rows="6"></textarea>
          </div>
        </div>
        <div className={Styles.actionArea}>
          <button onClick={handleSave}>Salvar</button>
          <button >Cancelar</button>
        </div>
        <div className={Styles.closeButton}>
          <CloseIcon onClick={closeCreate}/>
        </div>
      </div>
    </div>
  )
}