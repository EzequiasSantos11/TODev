import CloseIcon from '@mui/icons-material/Close';
import api from '../../api';
import Styles from "./edit.module.scss";

export default function DeleteList({closeDelete, id, title}){
  const handleDelete = ()=>{
    api.delete(`deletedo/${id}`).then(response=>{
      alert("Deletado com sucesso");
    })
  }
  return(
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Tem certeza que deseja deletar:</h3>
        <h2>{title}</h2>
        <div className={Styles.actionArea}>
          <button onClick={closeDelete}>Cancelar</button>
          <button onClick={handleDelete}>Deletar</button>
        </div>
        <div className={Styles.closeButton}>
          <CloseIcon onClick={closeDelete}/>
        </div>
      </div>
    </div>
  )
}