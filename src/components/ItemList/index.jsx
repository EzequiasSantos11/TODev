import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Styles from "./itemList.module.scss";
import { useState } from 'react';
import Editlist from '../Editlist';
import DeleteList from '../Deletelist';


function ItemList({id, title, created_at, deadline}){
  const [viewEdit, setViewEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  return(
    <>
      <div className={Styles.item}>
        <h2>{title}</h2>
        <p>{created_at} <br/>data de inicio</p>
        <p>{deadline}<br/>data final</p>
        <div className={Styles.actions}>
          <ModeEditIcon onClick={()=>setViewEdit(true)}/>
          <DeleteIcon onClick={()=>setOpenDelete(true)}/>
          <CheckIcon/>
        </div>
      </div>
      {viewEdit ? <Editlist title={title} id={id} closeEdit={()=>setViewEdit(false)}/> : ""}
      {openDelete ? <DeleteList title={title} id={id} closeDelete={()=> setOpenDelete(false)}/> : ""}
    </>
  )
}

export default ItemList;