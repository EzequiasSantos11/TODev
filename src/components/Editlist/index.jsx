import CloseIcon from '@mui/icons-material/Close';
import api from '../../api';
import { useState } from 'react';
import Styles from "./edit.module.scss";

export default function Editlist({closeEdit, id, title}){
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
    if(list.title !== "" || list.deadline !== ""){
      api.put(`updatedo/${id}`,{
        title: list.title,
        deadline: list.deadline,
        description: list.description
      }).then(response =>{
        alert("modificado com sucesso")
      });
    }
  }
  
  return(
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>{title}</h3>
        <div className={Styles.editArea}>
          <div className={Styles.inputArea}>
            <label>Editar título:</label>
            <input
              type="text" 
              name="title" 
              id="title" 
              onChange={handleInputTitle}
            />
          </div>
          <div className={Styles.inputArea}>
            <label htmlFor="">Editar data final:</label>
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
          <button >Excluir</button>
        </div>
        <div className={Styles.closeButton}>
          <CloseIcon onClick={closeEdit}/>
        </div>
      </div>
    </div>
  )
}